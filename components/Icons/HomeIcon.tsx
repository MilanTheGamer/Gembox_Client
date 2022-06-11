import styled, { useTheme } from "styled-components";
import { ThemeInterface } from "../../theme";
import { IconInterface } from "../../types/Icon";

const Wrapper = styled.div`
  svg g path {
    transition: ${({ theme }) => theme.transistion};
  }
`;

export function HomeIcon({ isActive }: IconInterface) {
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
        <g clipPath="url(#clip0_27_9)">
          <path
            d="M12.775 1.22498C13.4586 0.541382 14.5414 0.541382 15.225 1.22498L25.2273 11.2219C25.8836 11.8781 26.25 12.7695 26.25 13.6992V28H17.5V21C17.5 19.0695 15.9305 17.5 14 17.5C12.0695 17.5 10.5 19.0695 10.5 21V28H1.75V13.6992C1.75 12.7695 2.11641 11.8781 2.77266 11.2219L12.775 1.22498Z"
            fill={isActive ? theme.primary : theme.disabledOnSurface}
          />
        </g>
        <defs>
          <clipPath id="clip0_27_9">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  );
}
