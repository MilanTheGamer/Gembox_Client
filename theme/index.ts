export interface ThemeInterface {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  success: string;
  onPrimary: string;
  onSecondary: string;
  onSurface: string;
  onError: string;
}

export const lightTheme: ThemeInterface = {
  primary: "#7045FF",
  primaryVariant: "#5729EE",
  secondary: "#83FFE1",
  secondaryVariant: "#45FFD2F",
  background: "#FFFFFF",
  surface: "#F0F3F3",
  error: "#FD5959",
  success: "#32ff6a",
  onPrimary: "#FFFFFF",
  onSecondary: "#121435",
  onSurface: "#121435",
  onError: "#FFFFFF",
};

export const darkTheme: ThemeInterface = {
  primary: "#7045FF",
  primaryVariant: "#5729EE",
  secondary: "#83FFE1",
  secondaryVariant: "#45FFD2F",
  background: "#08091c",
  surface: "#121435",
  error: "#FD5959",
  success: "#32ff6a",
  onPrimary: "#FFFFFF",
  onSecondary: "#121435",
  onSurface: "#FFFFFF",
  onError: "#FFFFFF",
};
