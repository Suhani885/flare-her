export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizStep {
  title: string;
  question: string;
  field: string;
  multiSelect?: boolean;
  options: QuizOption[];
}

export interface QuizFormData {
  [key: string]: string | string[];
}

export interface ProductRecommendation {
  name: string;
  category: string;
  why: string;
}

export interface Recommendation {
  routine: string[];
  ingredients: string[];
  avoidIngredients: string[];
  lifestyleConsiderations: string[];
  products?: ProductRecommendation[];
}

export interface AnalysisResult {
  primaryType: string;
  secondaryType: string;
  concerns: string[];
  recommendations: Recommendation;
}

export type AnalysisType = "skin" | "hair";
export type AnalysisStage = "intro" | "select" | "quiz" | "results";
