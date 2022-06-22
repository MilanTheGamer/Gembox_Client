import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.button)`
  width: 42px;
  height: 42px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  cursor: pointer;
`;

export function WalletIcon() {
  // const theme = useTheme();

  return (
    <Wrapper
      animate={{
        background: [
          `linear-gradient(120deg, rgb(253, 110, 117) 0%, rgb(254, 90, 226) 50%, rgb(83, 145, 255) 100%)`,
          `linear-gradient(120deg, rgb(253, 110, 117) 0%, rgb(254, 90, 226) 40%, rgb(83, 145, 255) 90%, rgb(253, 110, 117) 100%)`,
          `linear-gradient(120deg, rgb(253, 110, 117) 0%, rgb(254, 90, 226) 30%, rgb(83, 145, 255) 80%, rgb(253, 110, 117) 100%)`,
          `linear-gradient(120deg, rgb(253, 110, 117) 0%, rgb(254, 90, 226) 20%, rgb(83, 145, 255) 70%, rgb(253, 110, 117) 100%)`,
          `linear-gradient(120deg, rgb(253, 110, 117) 0%, rgb(254, 90, 226) 10%, rgb(83, 145, 255) 60%, rgb(253, 110, 117) 100%)`,
          `linear-gradient(120deg, rgb(254, 90, 226) 0%, rgb(83, 145, 255) 50%, rgb(253, 110, 117) 100%)`,
          `linear-gradient(120deg, rgb(254, 90, 226) 0%, rgb(83, 145, 255) 40%, rgb(253, 110, 117) 90%, rgb(254, 90, 226) 100%)`,
          `linear-gradient(120deg, rgb(254, 90, 226) 0%, rgb(83, 145, 255) 30%, rgb(253, 110, 117) 80%, rgb(254, 90, 226) 100%)`,
          `linear-gradient(120deg, rgb(254, 90, 226) 0%, rgb(83, 145, 255) 20%, rgb(253, 110, 117) 70%, rgb(254, 90, 226) 100%)`,
          `linear-gradient(120deg, rgb(254, 90, 226) 0%, rgb(83, 145, 255) 10%, rgb(253, 110, 117) 60%, rgb(254, 90, 226) 100%)`,
          `linear-gradient(120deg, rgb(83, 145, 255) 0%, rgb(253, 110, 117) 50%, rgb(254, 90, 226) 100%)`,
          `linear-gradient(120deg, rgb(83, 145, 255) 0%, rgb(253, 110, 117) 40%, rgb(254, 90, 226) 90%, rgb(83, 145, 255) 100%)`,
          `linear-gradient(120deg, rgb(83, 145, 255) 0%, rgb(253, 110, 117) 30%, rgb(254, 90, 226) 80%, rgb(83, 145, 255) 100%)`,
          `linear-gradient(120deg, rgb(83, 145, 255) 0%, rgb(253, 110, 117) 20%, rgb(254, 90, 226) 70%, rgb(83, 145, 255) 100%)`,
          `linear-gradient(120deg, rgb(83, 145, 255) 0%, rgb(253, 110, 117) 10%, rgb(254, 90, 226) 60%, rgb(83, 145, 255) 100%)`,
        ],
        transition: {
          // ease: "backInOut",
          type: "spring",
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        width="25"
        height="22"
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5195 4.6875H3.90625C3.47461 4.6875 3.125 4.33789 3.125 3.90625C3.125 3.47461 3.47461 3.125 3.90625 3.125H22.6562C23.0879 3.125 23.4375 2.77539 23.4375 2.34375C23.4375 1.04932 22.3882 0 21.0938 0H3.125C1.39893 0 0 1.39893 0 3.125V18.75C0 20.4761 1.39893 21.875 3.125 21.875H22.5195C23.8877 21.875 25 20.8237 25 19.5312V7.03125C25 5.73877 23.8877 4.6875 22.5195 4.6875ZM20.3125 14.8438C19.4497 14.8438 18.75 14.144 18.75 13.2812C18.75 12.4185 19.4497 11.7188 20.3125 11.7188C21.1753 11.7188 21.875 12.4185 21.875 13.2812C21.875 14.144 21.1753 14.8438 20.3125 14.8438Z"
          fill="white"
        />
      </svg>
    </Wrapper>
  );
}
