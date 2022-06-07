import { ReactNode } from "react";
import styled from "styled-components";
import SideNav from "../components/SideNav/SideNav";

const BaseLayoutStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;

  .sidenavConatiner {
    width: 8rem;
    background: greenyellow;
  }
`;

export interface BaseLayoutInterface {
  children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutInterface) => {
  return (
    <BaseLayoutStyled>
      <div className="sidenavConatiner">
        <SideNav />
      </div>
      <div className="contentConatiner">{children}</div>
    </BaseLayoutStyled>
  );
};

export default BaseLayout;
