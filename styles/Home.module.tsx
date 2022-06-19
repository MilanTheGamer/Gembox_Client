import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100vw - 256px);
  min-height: 100vh;
  position: absolute;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;

  .primaryContainer {
    flex-grow: 2;
    .banner {
      margin-top: 20px;
    }
  }

  .secondaryContainer {
    flex-grow: 1;
  }
`;
