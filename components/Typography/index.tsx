import styled from "styled-components";

export interface TypographyInterface {
  type?: string;
  children: string;
}

// --------------------- TITLE ---------------------------------

const TitleWrapper = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  h5 {
    font-size: ${({ theme }) => theme.fontSize.h5};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
  h6 {
    font-size: ${({ theme }) => theme.fontSize.h6};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const switchTitle = (type: string, children: any) => {
  switch (type) {
    case "H1":
      return <h1>{children}</h1>;
    case "H2":
      return <h2>{children}</h2>;
    case "H3":
      return <h3>{children}</h3>;
    case "H4":
      return <h4>{children}</h4>;
    case "H5":
      return <h4>{children}</h4>;
    case "H6":
      return <h6>{children}</h6>;
    default:
      return <h6>{children}</h6>;
  }
};

export const Title = ({ type = "H1", children }: TypographyInterface) => {
  return <TitleWrapper>{switchTitle(type, children)}</TitleWrapper>;
};

// ------------------- SUBTITILE ------------------------------------

const SubtitleWrapper = styled.div`
  .subtitle1 {
    font-size: ${({ theme }) => theme.fontSize.sub1};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
  .subtitle2 {
    font-size: ${({ theme }) => theme.fontSize.sub2};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const switchSubtitle = (type: string, children: any) => {
  switch (type) {
    case "S1":
      return <span className="subtitle1">{children}</span>;
    case "S2":
      return <span className="subtitle2">{children}</span>;
    default:
      return <span className="subtitle1">{children}</span>;
  }
};

export const Subtitle = ({ type = "S1", children }: TypographyInterface) => {
  return <SubtitleWrapper>{switchSubtitle(type, children)}</SubtitleWrapper>;
};

// -------------------- TEXT ---------------------------------------------

const TextWrapper = styled.div`
  .body1 {
    font-size: ${({ theme }) => theme.fontSize.body1};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
  .body2 {
    font-size: ${({ theme }) => theme.fontSize.body2};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

const switchText = (type: string, children: any) => {
  switch (type) {
    case "B1":
      return <span className="body1">{children}</span>;
    case "B2":
      return <span className="body2">{children}</span>;
    default:
      return <span className="body1">{children}</span>;
  }
};

export const Text = ({ type = "B1", children }: TypographyInterface) => {
  return <TextWrapper>{switchText(type, children)}</TextWrapper>;
};

// ------------------- CAPTION -------------------------------------------

const CaptionWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Caption = ({ children }: TypographyInterface) => {
  return <CaptionWrapper>{children}</CaptionWrapper>;
};

// ------------------ OVERLINE ------------------------------------------

const OverlineWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.overline};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Overline = ({ children }: TypographyInterface) => {
  return <OverlineWrapper>{children.toUpperCase()}</OverlineWrapper>;
};
