import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 60%;
    width: 48px;
    background: ${({ theme }) => theme.surface};
    border-radius: ${({ theme }) => theme.borderRadius.rounded};
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;

    button {
      cursor: pointer;
    }
  }
`;
