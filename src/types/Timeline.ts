export interface Timeline {
  id: string;
  startDate: string;
  endDate: string | undefined;
  company: string;
  location: string;
  role: string;
  summary: string[];
}

export interface TimelineState {
  error: boolean;
  loading: boolean;
  data: Timeline[];
}
