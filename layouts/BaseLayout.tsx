import { ReactNode } from "react";
import styled from "styled-components";
import HeaderContainer from "../containers/HeaderContainer";

const BaseLayoutStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export interface BaseLayoutInterface {
  children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutInterface) => {
  return (
    <BaseLayoutStyled>
      <HeaderContainer />
      <div className="contentConatiner">{children}</div>
    </BaseLayoutStyled>
  );
};

export default BaseLayout;
