export interface LoaderState {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  isLoading: () => boolean;
}
