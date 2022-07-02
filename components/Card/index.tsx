import { motion } from "framer-motion";
import styled from "styled-components";
import { Subtitle, Text } from "../Typography";

const Wrapper = styled(motion.div)`
  grid-column: span 2;
  grid-row: span 2;
  border: ${({ theme }) => theme.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.light};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadow.type2};
    background: ${({ theme }) => theme.surface};
  }
  &.big {
    grid-column: span 4;
    grid-row: span 4;
  }
  &.long {
    grid-column: span 4;
    grid-row: span 2;
  }
  &.small {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

interface CardInterface {
  data?: any;
  type?: string;
}

const Card = ({ data, type = "small" }: CardInterface) => {
  return (
    <Wrapper className={type}>
      <Subtitle>{data.type}</Subtitle>
      <Text>{data.blockchain}</Text>
    </Wrapper>
  );
};

export default Card;
