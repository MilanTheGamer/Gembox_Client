import styled from "styled-components";

const TitleWrapper = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
  h5 {
    font-size: ${({ theme }) => theme.fontSize.h5};
  }
  h6 {
    font-size: ${({ theme }) => theme.fontSize.h6};
  }
`;

export interface TitleInterface {
  type: string;
  children: any;
}

const switchTitle = (type: string, children: any) => {
  switch (type) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h6":
      return <h6>{children}</h6>;
    default:
      return <h6>{children}</h6>;
  }
};

export const Title = ({ type, children }: TitleInterface) => {
  return <TitleWrapper>{switchTitle(type, children)}</TitleWrapper>;
};
