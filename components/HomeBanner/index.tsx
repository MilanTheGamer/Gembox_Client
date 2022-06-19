import styled from "styled-components";
import { Subtitle, Title } from "../Typography";

const Wrapper = styled.div`
  height: 140px;
  background: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.borderRadius.light};
  padding: 20px 20px;
`;

export const HomeBanner = () => {
  return (
    <Wrapper>
      <Title variant="onPrimary">Welcome</Title>
      <Subtitle variant="onPrimary">
        To the world of decentralised lottery
      </Subtitle>
    </Wrapper>
  );
};
