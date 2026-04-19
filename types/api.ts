export interface ApiCallOptions {
  data?: unknown;
  params?: Record<string, string | number | boolean>;
  contentType?: string;
  headers?: Record<string, string | boolean>;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  status?: number;
}
