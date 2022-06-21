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
    padding: 0px 20px;
    .banner {
      margin: 20px 0px;
    }
    .hotList {
      display: grid;
      grid-template-columns: repeat(10, 75px);
      grid-template-rows: repeat(6, 75px);
      grid-gap: 10px;
      .gridItem {
        grid-column: span 2;
        grid-row: span 2;
        background: ${({ theme }) => theme.surface};
        border-radius: ${({ theme }) => theme.borderRadius.light};
        &.gridBigItem {
          grid-column: span 4;
          grid-row: span 4;
        }
      }
    }
  }

  .secondaryContainer {
    flex-grow: 1;
  }
`;
