import styled from "styled-components";

export interface TypographyInterface {
  type?: string;
  variant?: "onSurface" | "onPrimary" | "primary";
  emphasis?: "high" | "medium" | "disabled";
  children: string;
}

// --------------------- TITLE ---------------------------------

const TitleWrapper = styled.div`
  &.title_onSurface {
    color: ${({ theme }) => theme.onSurface};
  }
  &.title_onPrimary {
    color: ${({ theme }) => theme.onPrimary};
  }
  &.title_primary {
    color: ${({ theme }) => theme.primary};
  }
  &.title_high_emphasis {
    opacity: 0.87;
  }
  &.title_medium_emphasis {
    opacity: 0.6;
  }
  &.title_disabled_emphasis {
    opacity: 0.38;
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 8px 0px;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 8px 0px;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin: 8px 0px;
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 8px 0px;
  }
  h5 {
    font-size: ${({ theme }) => theme.fontSize.h5};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin: 8px 0px;
  }
  h6 {
    font-size: ${({ theme }) => theme.fontSize.h6};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin: 8px 0px;
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

export const Title = ({
  type = "H1",
  variant = "onSurface",
  emphasis = "high",
  children,
}: TypographyInterface) => {
  return (
    <TitleWrapper
      className={`typography typography_title title_${variant} title_${emphasis}_emphasis`}
    >
      {switchTitle(type, children)}
    </TitleWrapper>
  );
};

// ------------------- SUBTITILE ------------------------------------

const SubtitleWrapper = styled.div`
  &.subtitle_onSurface {
    color: ${({ theme }) => theme.onSurface};
  }
  &.subtitle_onPrimary {
    color: ${({ theme }) => theme.onPrimary};
  }
  &.subtitle_primary {
    color: ${({ theme }) => theme.primary};
  }
  &.subtitle_high_emphasis {
    opacity: 0.87;
  }
  &.subtitle_medium_emphasis {
    opacity: 0.6;
  }
  &.subtitle_disabled_emphasis {
    opacity: 0.38;
  }
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

export const Subtitle = ({
  type = "S1",
  variant = "onSurface",
  emphasis = "high",
  children,
}: TypographyInterface) => {
  return (
    <SubtitleWrapper
      className={`typography typography_subtitle subtitle_${variant} subtitle_${emphasis}_emphasis`}
    >
      {switchSubtitle(type, children)}
    </SubtitleWrapper>
  );
};

// -------------------- TEXT ---------------------------------------------

const TextWrapper = styled.div`
  &.text_onSurface {
    color: ${({ theme }) => theme.onSurface};
  }
  &.text_onPrimary {
    color: ${({ theme }) => theme.onPrimary};
  }
  &.text_primary {
    color: ${({ theme }) => theme.primary};
  }
  &.text_high_emphasis {
    opacity: 0.87;
  }
  &.text_medium_emphasis {
    opacity: 0.6;
  }
  &.text_disabled_emphasis {
    opacity: 0.38;
  }
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

export const Text = ({
  type = "B1",
  variant = "onSurface",
  emphasis = "high",
  children,
}: TypographyInterface) => {
  return (
    <TextWrapper
      className={`typography typography_text text_${variant} text_${emphasis}_emphasis`}
    >
      {switchText(type, children)}
    </TextWrapper>
  );
};

// ------------------- CAPTION -------------------------------------------

const CaptionWrapper = styled.div`
  &.caption_onSurface {
    color: ${({ theme }) => theme.onSurface};
  }
  &.caption_onPrimary {
    color: ${({ theme }) => theme.onPrimary};
  }
  &.caption_primary {
    color: ${({ theme }) => theme.primary};
  }
  &.caption_high_emphasis {
    opacity: 0.87;
  }
  &.caption_medium_emphasis {
    opacity: 0.6;
  }
  &.caption_disabled_emphasis {
    opacity: 0.38;
  }
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Caption = ({
  variant = "onSurface",
  emphasis = "high",
  children,
}: TypographyInterface) => {
  return (
    <CaptionWrapper
      className={`typography typography_caption caption_${variant} caption_${emphasis}_emphasis`}
    >
      {children}
    </CaptionWrapper>
  );
};

// ------------------ OVERLINE ------------------------------------------

const OverlineWrapper = styled.div`
  &.overline_onSurface {
    color: ${({ theme }) => theme.onSurface};
  }
  &.overline_onPrimary {
    color: ${({ theme }) => theme.onPrimary};
  }
  &.overline_primary {
    color: ${({ theme }) => theme.primary};
  }
  &.overline_high_emphasis {
    opacity: 0.87;
  }
  &.overline_medium_emphasis {
    opacity: 0.6;
  }
  &.overline_disabled_emphasis {
    opacity: 0.38;
  }
  font-size: ${({ theme }) => theme.fontSize.overline};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Overline = ({
  variant = "onSurface",
  emphasis = "high",
  children,
}: TypographyInterface) => {
  return (
    <OverlineWrapper
      className={`typography typography_overline overline_${variant} overline_${emphasis}_emphasis`}
    >
      {children.toUpperCase()}
    </OverlineWrapper>
  );
};
