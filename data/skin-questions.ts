import type { QuizStep, QuizFormData } from "@/types/analysis";

export const skinSteps: QuizStep[] = [
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
    title: "Cleansing Response",
    question: "How does your skin feel after washing?",
    field: "skinFeelAfterWashing",
    options: [
      { value: "tight", label: "Tight and dry" },
      { value: "comfortable", label: "Comfortable and balanced" },
      { value: "stillOily", label: "Still feels oily" },
      { value: "irritated", label: "Irritated or sensitive" },
    ],
  },
  {
    title: "Shine Levels",
    question: "How would you describe your skin's shine throughout the day?",
    field: "shineLevels",
    options: [
      { value: "alwaysMatte", label: "Always matte, sometimes flaky" },
      { value: "mostlyMatte", label: "Mostly matte with occasional shine" },
      { value: "shinyTzone", label: "Shiny in the T-zone by midday" },
      { value: "shinyAll", label: "Shiny all over by midday" },
    ],
  },
  {
    title: "Breakout Frequency",
    question: "How often do you experience breakouts?",
    field: "breakoutFrequency",
    options: [
      { value: "rarely", label: "Rarely or never" },
      { value: "occasionally", label: "Occasionally" },
      { value: "frequently", label: "Frequently, mostly in T-zone" },
      { value: "constant", label: "Constant or severe breakouts" },
    ],
  },
  {
    title: "Skin Sensitivity",
    question: "How sensitive is your skin?",
    field: "skinSensitivity",
    options: [
      { value: "notSensitive", label: "Not sensitive at all" },
      { value: "slightlySensitive", label: "Slightly sensitive to some products" },
      { value: "moderatelySensitive", label: "Moderately sensitive" },
      { value: "verySensitive", label: "Very sensitive, easily irritated" },
    ],
  },
  {
    title: "Climate Response",
    question: "How does your skin respond to climate changes?",
    field: "climateEffect",
    options: [
      { value: "drier", label: "Gets drier and flakier" },
      { value: "noChange", label: "No significant changes" },
      { value: "oilier", label: "Gets oilier" },
      { value: "irritated", label: "Gets irritated and reactive" },
    ],
  },
  {
    title: "Makeup Wear",
    question: "How does makeup wear on your skin?",
    field: "makeupStaying",
    options: [
      { value: "flakes", label: "Tends to flake or look patchy" },
      { value: "staysWell", label: "Stays well throughout the day" },
      { value: "fadesTzone", label: "Fades or separates in T-zone" },
      { value: "slidesOff", label: "Slides off within a few hours" },
      { value: "doNotUseMakeup", label: "Don't use makeup" },
    ],
  },
  {
    title: "Hydration Status",
    question: "How would you describe your skin's hydration level?",
    field: "hydrationStatus",
    options: [
      { value: "alwaysDry", label: "Always feels dry and tight" },
      { value: "wellHydrated", label: "Well-hydrated and comfortable" },
      { value: "dehydratedOily", label: "Dehydrated but still gets oily" },
      { value: "variesGreatly", label: "Varies greatly with weather/seasons" },
    ],
  },
  {
    title: "Pore Appearance",
    question: "How visible are your pores?",
    field: "poreSize",
    options: [
      { value: "invisible", label: "Nearly invisible" },
      { value: "smallVisible", label: "Small, slightly visible" },
      { value: "moderateVisible", label: "Moderate, especially on nose" },
      { value: "largeVisible", label: "Large and prominent" },
    ],
  },
  {
    title: "Main Concerns",
    question: "What are your main skin concerns? (Select up to 3)",
    field: "mainConcerns",
    multiSelect: true,
    options: [
      { value: "dryness", label: "Dryness or flakiness" },
      { value: "oiliness", label: "Excessive oiliness" },
      { value: "acne", label: "Acne or breakouts" },
      { value: "sensitivity", label: "Sensitivity or redness" },
      { value: "aging", label: "Signs of aging" },
      { value: "dullness", label: "Dullness or uneven texture" },
      { value: "hyperpigmentation", label: "Hyperpigmentation or dark spots" },
      { value: "largePores", label: "Large pores" },
    ],
  },
];

export const initialSkinData: QuizFormData = {
  age: "",
  skinFeelAfterWashing: "",
  shineLevels: "",
  breakoutFrequency: "",
  skinSensitivity: "",
  climateEffect: "",
  makeupStaying: "",
  hydrationStatus: "",
  poreSize: "",
  mainConcerns: [],
};
