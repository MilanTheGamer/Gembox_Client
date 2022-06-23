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
  border: {
    primary: string;
  };
  borderRadius: {
    light: string;
    medium: string;
    rounded: string;
  };
  shadow: {
    type1: string;
    type2: string;
    type3: string;
  };
  transistion: string;
  fontSize: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    sub1: string;
    sub2: string;
    body1: string;
    body2: string;
    button: string;
    caption: string;
    overline: string;
  };
  fontWeight: {
    regular: number;
    medium: number;
    bold: number;
  };
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
  border: {
    primary: "1px solid #F0F3F3",
  },
  borderRadius: {
    light: "5px",
    medium: "10px",
    rounded: "50px",
  },
  shadow: {
    type1: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    type2: `
      rgba(112, 69, 255, 0.4) 5px 5px,
      rgba(112, 69, 255, 0.3) 10px 10px,
      rgba(112, 69, 255, 0.2) 15px 15px,
      rgba(112, 69, 255, 0.1) 20px 20px,
      rgba(112, 69, 255, 0.05) 25px 25px
    `,
    type3: `rgba(112, 69, 255, 0.1) 0px 8px 24px, rgba(112, 69, 255, 0.1) 0px 16px 56px, rgba(112, 69, 255, 0.1) 0px 24px 80px`,
  },
  transistion: "all 0.2s ease-in-out",
  fontSize: {
    h1: "3rem",
    h2: "2.5rem",
    h3: "2rem",
    h4: "1.875",
    h5: "1.5",
    h6: "1.25",
    sub1: "1rem",
    sub2: "0.875rem",
    body1: "1rem",
    body2: "0.875rem",
    button: "0.875rem",
    caption: "0.75rem",
    overline: "0.625rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
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
  border: {
    primary: "1px solid #121435",
  },
  borderRadius: {
    light: "5px",
    medium: "10px",
    rounded: "50px",
  },
  shadow: {
    type1: "rgba(255, 255, 255, 0.1) 0px 25px 50px -12px",
    type2: `
      rgba(112, 69, 255, 0.4) 5px 5px,
      rgba(112, 69, 255, 0.3) 10px 10px,
      rgba(112, 69, 255, 0.2) 15px 15px,
      rgba(112, 69, 255, 0.1) 20px 20px,
      rgba(112, 69, 255, 0.05) 25px 25px
    `,
    type3: `rgba(112, 69, 255, 0.1) 0px 8px 24px, rgba(112, 69, 255, 0.1) 0px 16px 56px, rgba(112, 69, 255, 0.1) 0px 24px 80px`,
  },
  transistion: "all 0.2s ease-in-out",
  fontSize: {
    h1: "3rem",
    h2: "2.5rem",
    h3: "2rem",
    h4: "1.875",
    h5: "1.5",
    h6: "1.25",
    sub1: "1rem",
    sub2: "0.875rem",
    body1: "1rem",
    body2: "0.875rem",
    button: "0.875rem",
    caption: "0.75rem",
    overline: "0.625rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};
