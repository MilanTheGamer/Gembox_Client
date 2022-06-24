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
      grid-template-columns: repeat(8, 80px);
      grid-template-rows: repeat(6, 80px);
      grid-gap: 20px;
      .gridItem {
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
        &.gridBigItem {
          grid-column: span 4;
          grid-row: span 4;
        }
        &.wideGridItem {
          grid-column: span 4;
          grid-row: span 2;
        }
      }
    }
  }

  .secondaryContainer {
    flex-grow: 1;
    padding: 0px 20px;
    .winnersTab {
      margin: 20px 0px;
      min-height: 500px;
      border-radius: ${({ theme }) => theme.borderRadius.light};
      .winnersList {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .winnerItem {
          margin: 2px;
          height: 100px;
          width: 100%;
          border: ${({ theme }) => theme.border.primary};
          border-radius: ${({ theme }) => theme.borderRadius.light};
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          &:hover {
            transform: translateY(-5px);
            box-shadow: ${({ theme }) => theme.shadow.type2};
            background: ${({ theme }) => theme.surface};
          }
        }
      }
    }
  }
`;
