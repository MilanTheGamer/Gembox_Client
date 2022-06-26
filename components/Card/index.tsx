import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  grid-column: span 2;
  grid-row: span 2;
  border: ${({ theme }) => theme.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.light};
  cursor: pointer;
`;

const Card = () => {
  return <Wrapper />;
};

export default Card;
