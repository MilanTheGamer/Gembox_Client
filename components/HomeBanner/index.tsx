import styled from "styled-components";
import { Subtitle, Title, Text, Caption, Overline } from "../Typography";

const Wrapper = styled.div``;

export const HomeBanner = () => {
  return (
    <Wrapper>
      <Title>Welcome</Title>
      <Subtitle>to the world of gembox</Subtitle>
      <Text>Hello</Text>
      <Caption>Hello</Caption>
      <Overline>Hello there how are you?</Overline>
    </Wrapper>
  );
};
