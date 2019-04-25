export interface ThemeState {
  error: boolean;
  loading: boolean;
  data: any;
}

export interface Theme {
  header: Record<string, any>;
  footer: Record<string, any>;
  general: Record<string, any>;
  chart: Record<string, any>;
}
