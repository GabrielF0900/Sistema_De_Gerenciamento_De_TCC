/**
 * Interface base para respostas de API.
 */

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface PaginatedResponse<T> extends ApiResponse {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrevious: boolean;
  totalPages: number;
}
