import type { QuizStep, QuizFormData } from "@/types/analysis";

export const hairSteps: QuizStep[] = [
  {
    title: "Basic Information",
    question: "What is your age range?",
    field: "age",
    options: [
      { value: "under18", label: "Under 18" },
      { value: "18-24", label: "18–24" },
      { value: "25-34", label: "25–34" },
      { value: "35-44", label: "35–44" },
      { value: "45-54", label: "45–54" },
      { value: "55+", label: "55+" },
    ],
  },
  {
    title: "Hair Type",
    question: "How would you describe your natural hair texture?",
    field: "hairTexture",
    options: [
      { value: "straight", label: "Straight (Type 1)" },
      { value: "wavy", label: "Wavy (Type 2)" },
      { value: "curly", label: "Curly (Type 3)" },
      { value: "coily", label: "Coily / Kinky (Type 4)" },
    ],
  },
  {
    title: "Scalp Condition",
    question: "How does your scalp feel between washes?",
    field: "scalpCondition",
    options: [
      { value: "dry", label: "Dry and itchy" },
      { value: "balanced", label: "Balanced and comfortable" },
      { value: "oily", label: "Oily and greasy" },
      { value: "flaky", label: "Flaky with dandruff" },
    ],
  },
  {
    title: "Wash Frequency",
    question: "How often do you wash your hair?",
    field: "washFrequency",
    options: [
      { value: "daily", label: "Every day" },
      { value: "everyOtherDay", label: "Every other day" },
      { value: "twiceWeek", label: "2–3 times a week" },
      { value: "onceWeek", label: "Once a week or less" },
    ],
  },
  {
    title: "Hair Thickness",
    question: "How would you describe your hair strand thickness?",
    field: "hairThickness",
    options: [
      { value: "fine", label: "Fine — strands are thin" },
      { value: "medium", label: "Medium — average thickness" },
      { value: "coarse", label: "Coarse — thick, strong strands" },
      { value: "mixed", label: "Mixed — varies across head" },
    ],
  },
  {
    title: "Damage & Treatments",
    question: "What chemical or heat treatments do you use?",
    field: "chemicalTreatments",
    options: [
      { value: "none", label: "None — completely natural" },
      { value: "heatOnly", label: "Heat styling only" },
      { value: "colorTreated", label: "Color treated / bleached" },
      { value: "chemicalRelax", label: "Chemically relaxed / permed" },
    ],
  },
  {
    title: "Moisture Level",
    question: "How does your hair feel most of the time?",
    field: "moistureLevel",
    options: [
      { value: "dryBrittle", label: "Dry and brittle" },
      { value: "moisturized", label: "Moisturized and soft" },
      { value: "greasySoon", label: "Gets greasy soon after washing" },
      { value: "frizzy", label: "Frizzy and hard to manage" },
    ],
  },
  {
    title: "Hair Density",
    question: "How dense is your hair?",
    field: "hairDensity",
    options: [
      { value: "thin", label: "Thin — scalp easily visible" },
      { value: "medium", label: "Medium — scalp somewhat visible" },
      { value: "thick", label: "Thick — scalp not visible" },
    ],
  },
  {
    title: "Scalp Sensitivity",
    question: "How sensitive is your scalp?",
    field: "scalpSensitivity",
    options: [
      { value: "notSensitive", label: "Not sensitive at all" },
      { value: "mildy", label: "Mildly sensitive to fragrances" },
      { value: "moderately", label: "Moderately sensitive" },
      { value: "verySensitive", label: "Very sensitive, prone to reactions" },
    ],
  },
  {
    title: "Main Concerns",
    question: "What are your main hair concerns? (Select up to 3)",
    field: "mainConcerns",
    multiSelect: true,
    options: [
      { value: "hairfall", label: "Hair fall / thinning" },
      { value: "dryness", label: "Dryness or breakage" },
      { value: "dandruff", label: "Dandruff or flakiness" },
      { value: "frizz", label: "Frizz and flyaways" },
      { value: "oilyScalp", label: "Oily scalp" },
      { value: "slowGrowth", label: "Slow growth" },
      { value: "colorFade", label: "Color fading fast" },
      { value: "noVolume", label: "Lack of volume" },
    ],
  },
];

export const initialHairData: QuizFormData = {
  age: "",
  hairTexture: "",
  scalpCondition: "",
  washFrequency: "",
  hairThickness: "",
  chemicalTreatments: "",
  moistureLevel: "",
  hairDensity: "",
  scalpSensitivity: "",
  mainConcerns: [],
};
