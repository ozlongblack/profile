import { List } from 'immutable';

export interface Profile {
  name: string;
  role: string;
  keywords: List<string>;
  location: string;
}

export interface ProfileState {
  error: boolean;
  loading: boolean;
  data: any;
}
