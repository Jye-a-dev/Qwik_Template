/**
 * Global TypeScript type declarations for the template.
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data: T;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}
