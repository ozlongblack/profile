import { ThemeState } from 'types/Theme';

export interface HeaderProps {
  darkMode: boolean;
  sticky: boolean;
  setDarkMode: Function;
  theme: ThemeState;
}
