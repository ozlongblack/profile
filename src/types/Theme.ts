export interface ThemeState {
  error: boolean;
  data: any;
}

export interface Theme {
  header: Record<string, any>;
  general: Record<string, any>;
  chart: Record<string, any>;
}
