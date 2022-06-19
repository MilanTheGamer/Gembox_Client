import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100vw - 16rem);
  min-height: 100vh;
  position: absolute;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;

  .primaryContainer {
    background: yellow;
    flex-grow: 2;
  }

  .secondaryContainer {
    background: blue;
    flex-grow: 1;
  }
`;
