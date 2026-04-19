"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuizStage } from "@/components/analysis/quiz-stage";
import { ResultsStage } from "@/components/analysis/results-stage";
import { hairSteps, initialHairData } from "@/data/hair-questions";
import { apiCall } from "@/lib/api";
import { endpoints } from "@/constants/urls";
import type { QuizFormData, AnalysisResult, AnalysisStage } from "@/types/analysis";

function getHairLabel(steps: typeof hairSteps, data: QuizFormData, field: string) {
  const step = steps.find((s) => s.field === field);
  if (!step) return data[field] as string;
  const opt = step.options.find((o) => o.value === (data[field] as string));
  return opt ? opt.label : (data[field] as string);
}

function formatHairPayload(data: QuizFormData) {
  const concerns = (data.mainConcerns as string[]).map((v) => {
    const step = hairSteps.find((s) => s.field === "mainConcerns")!;
    return step.options.find((o) => o.value === v)?.label ?? v;
  });
  return {
    age: getHairLabel(hairSteps, data, "age"),
    hair_texture: getHairLabel(hairSteps, data, "hairTexture"),
    scalp_condition: getHairLabel(hairSteps, data, "scalpCondition"),
    wash_frequency: getHairLabel(hairSteps, data, "washFrequency"),
    hair_thickness: getHairLabel(hairSteps, data, "hairThickness"),
    chemical_treatments: getHairLabel(hairSteps, data, "chemicalTreatments"),
    moisture_level: getHairLabel(hairSteps, data, "moistureLevel"),
    hair_density: getHairLabel(hairSteps, data, "hairDensity"),
    scalp_sensitivity: getHairLabel(hairSteps, data, "scalpSensitivity"),
    main_concerns: concerns.join(", "),
  };
}

const HAIR_FALLBACK: AnalysisResult = {
  primaryType: "Wavy & Dry Hair",
  secondaryType: "Color-Treated",
  concerns: ["Dryness", "Frizz", "Breakage"],
  recommendations: {
    routine: [
      "Co-wash 2x per week",
      "Deep condition weekly",
      "Apply leave-in on damp hair",
      "Use wide-tooth comb only",
      "Protect with satin pillowcase",
    ],
    ingredients: ["Argan Oil", "Keratin", "Shea Butter", "Biotin", "Panthenol"],
    avoidIngredients: ["Sulfates", "Silicones", "Mineral Oil", "Alcohol"],
    lifestyleConsiderations: [
      "Trim ends every 8 weeks",
      "Limit heat to 2x/week",
      "Eat biotin-rich foods",
      "Cold water rinse for shine",
    ],
    products: [
      { name: "SheaMoisture Curl Enhancing Smoothie", category: "Styling", why: "Defines curls, reduces frizz" },
      { name: "Briogeo Don't Despair, Repair! Mask", category: "Treatment", why: "Repairs heat damage" },
      { name: "Mielle Organics Rosemary Mint Oil", category: "Scalp", why: "Stimulates growth" },
    ],
  },
};

export default function HairAnalysisPage() {
  const router = useRouter();
  const [stage, setStage] = useState<AnalysisStage>("quiz");
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<QuizFormData>(initialHairData);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleMultiSelect = (field: string, value: string) => {
    setFormData((prev) => {
      const current = (prev[field] as string[]) || [];
      if (current.includes(value))
        return { ...prev, [field]: current.filter((v) => v !== value) };
      if (current.length < 3)
        return { ...prev, [field]: [...current, value] };
      return prev;
    });
  };

  const handleNext = () => {
    const step = hairSteps[currentStep];
    const val = formData[step.field];
    if (step.multiSelect) {
      if ((val as string[]).length === 0) {
        setError("Please select at least one option.");
        return;
      }
    } else if (!val) {
      setError("Please select an option before continuing.");
      return;
    }
    setError(null);
    if (currentStep < hairSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setError(null);
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    const payload = formatHairPayload(formData);
    const response = await apiCall<{
      primary_type: string;
      secondary_characteristics?: string[];
      main_concerns?: string;
      recommendations?: {
        routine?: string[];
        ingredients?: string[];
        avoid_ingredients?: string[];
        lifestyle?: string[];
        products?: { name: string; category: string; why: string }[];
      };
    }>("POST", endpoints.HAIR_ANALYSIS, { data: payload });

    if (response.success && response.data) {
      const d = response.data;
      setResult({
        primaryType: d.primary_type,
        secondaryType: d.secondary_characteristics?.join(", ") ?? "",
        concerns: d.main_concerns ? d.main_concerns.split(", ") : [],
        recommendations: {
          routine: d.recommendations?.routine ?? [],
          ingredients: d.recommendations?.ingredients ?? [],
          avoidIngredients: d.recommendations?.avoid_ingredients ?? [],
          lifestyleConsiderations: d.recommendations?.lifestyle ?? [],
          products: d.recommendations?.products ?? [],
        },
      });
    } else {
      setResult(HAIR_FALLBACK);
    }
    setStage("results");
  };

  const handleReset = () => {
    setCurrentStep(0);
    setFormData(initialHairData);
    setResult(null);
    setError(null);
    setStage("quiz");
  };

  if (stage === "results" && result) {
    return <ResultsStage result={result} type="hair" onReset={handleReset} />;
  }

  return (
    <QuizStage
      steps={hairSteps}
      currentStep={currentStep}
      formData={formData}
      error={error}
      type="hair"
      onSelect={handleSelect}
      onMultiSelect={handleMultiSelect}
      onNext={handleNext}
      onBack={handleBack}
      onBackToSelect={() => router.push("/analysis")}
    />
  );
}
