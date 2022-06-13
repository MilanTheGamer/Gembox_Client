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

export function HistoryIcon({ isActive }: IconInterface) {
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
          d="M3.5 4.74142C6.06519 1.83203 9.81641 0 14 0C21.7332 0 28 6.26717 28 14C28 21.7328 21.7332 28 14 28C6.86328 28 0.967285 22.657 0.109375 15.75H3.64697C4.47925 20.7156 8.79956 24.5 14 24.5C19.7969 24.5 24.5 19.7969 24.5 14C24.5 8.20312 19.7969 3.5 14 3.5C10.8879 3.5 8.09888 4.85079 6.17456 7H7C7.96216 7 8.75 7.78752 8.75 8.75C8.75 9.71248 7.96216 10.5 7 10.5H1.75C1.32959 10.5 0.939941 10.3523 0.63916 10.1008C0.251221 9.77811 0 9.29143 0 8.75V3.5C0 2.53752 0.787842 1.75 1.75 1.75C2.71216 1.75 3.5 2.53752 3.5 3.5V4.74142Z"
          fill={isActive ? theme.primary : theme.disabledOnSurface}
        />
        <path
          d="M10.5 19.25C10.2761 19.25 10.0505 19.1625 9.88135 18.993C9.53784 18.6539 9.53784 18.0961 9.88135 17.757L12.5063 15.132C12.3423 14.7875 12.25 14.4047 12.25 14C12.25 12.857 12.9832 11.8836 14 11.5227V6.125C14 5.64376 14.3931 5.25 14.875 5.25C15.3552 5.25 15.75 5.64376 15.75 6.125V11.5227C16.7668 11.8836 17.5 12.857 17.5 14C17.5 15.4492 16.3242 16.625 14.875 16.625C14.47 16.625 14.0872 16.532 13.7419 16.368L11.1169 18.993C10.9478 19.1625 10.7239 19.25 10.5 19.25Z"
          fill={isActive ? theme.primary : theme.disabledOnSurface}
        />
      </svg>
    </Wrapper>
  );
}
