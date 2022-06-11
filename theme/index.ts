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
  highEmphasisOnSurface: string;
  mediumEmphasisOnSurface: string;
  disabledOnSurface: string;
  highEmphasisOnPrimary: string;
  mediumEmphasisOnPrimary: string;
  disabledOnPrimary: string;
  borderRadius: {
    light: string;
    medium: string;
    rounded: string;
  };
  transistion: string;
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
  highEmphasisOnSurface: "#12143587",
  mediumEmphasisOnSurface: "#12143560",
  disabledOnSurface: "#12143538",
  highEmphasisOnPrimary: "#FFFFFF87",
  mediumEmphasisOnPrimary: "#FFFFFF60",
  disabledOnPrimary: "#FFFFFF38",
  borderRadius: {
    light: "5px",
    medium: "10px",
    rounded: "50px",
  },
  transistion: "all 0.2s ease-in-out",
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
  highEmphasisOnSurface: "#FFFFFF87",
  mediumEmphasisOnSurface: "#FFFFFF60",
  disabledOnSurface: "#FFFFFF38",
  highEmphasisOnPrimary: "#FFFFFF87",
  mediumEmphasisOnPrimary: "#FFFFFF60",
  disabledOnPrimary: "#FFFFFF38",
  borderRadius: {
    light: "5px",
    medium: "10px",
    rounded: "50px",
  },
  transistion: "all 0.2s ease-in-out",
};
