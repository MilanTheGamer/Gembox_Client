import styled, { useTheme } from "styled-components";
import { ThemeInterface } from "../../theme";
import { IconInterface } from "../../types/Icon";

const Wrapper = styled.div`
  svg g path {
    transition: ${({ theme }) => theme.transistion};
  }
`;

export function CreateIcon({ isActive }: IconInterface) {
  const theme: ThemeInterface = useTheme();
  return (
    <Wrapper>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.2402 12.2502H15.7177V1.75513C15.7177 0.792627 14.9302 0.00512695 13.9677 0.00512695C13.0052 0.00512695 12.2177 0.792627 12.2177 1.75513V12.2502H1.75C0.7875 12.2502 0 13.0377 0 14.0002C0 14.9627 0.7875 15.7502 1.75 15.7502H12.2177V26.2453C12.2177 27.2078 13.0052 27.9953 13.9677 27.9953C14.9302 27.9953 15.7177 27.2078 15.7177 26.2453V15.7503H26.2402C27.2027 15.7503 27.9902 14.9628 27.9902 14.0003C27.9902 13.0378 27.2027 12.2502 26.2402 12.2502Z"
          fill={isActive ? theme.primary : theme.disabledOnSurface}
        />
      </svg>
    </Wrapper>
  );
}
