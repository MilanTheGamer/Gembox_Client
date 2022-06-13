import styled, { useTheme } from "styled-components";
import { ThemeInterface } from "../../theme";
import { IconInterface } from "../../types/Icon";

const Wrapper = styled.div`
  svg path {
    transition: ${({ theme }) => theme.transistion};
  }
  &:hover {
    svg path {
      fill: ${({ theme }) => theme.primary};
    }
  }
`;

export function NotificationIcon({ isActive }: IconInterface) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.25 1.70365C12.25 1.70365 3.5 1.70365 3.5 17.4667L1.75 19.2182C1.75 23.9252 26.25 24.0345 26.25 19.2182L24.5 17.4667C24.5 1.70365 15.75 1.70365 15.75 1.70365C15.75 -0.540458 12.25 -0.595146 12.25 1.70365ZM7 18.6489C7 18.6489 7 5.20643 14 5.20643C21 5.20643 21 18.6489 21 18.6489C15.75 19.218 12.25 19.218 7 18.6489Z"
          fill={isActive ? theme.primary : theme.disabledOnSurface}
        />
        <path
          d="M8.94141 24.051C10.6094 29.3437 17.3906 29.2888 19.0586 24.051C15.75 24.4725 12.25 24.4725 8.94141 24.051Z"
          fill={isActive ? theme.primary : theme.disabledOnSurface}
        />
      </svg>
    </Wrapper>
  );
}
