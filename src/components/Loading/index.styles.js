import styled from "styled-components";

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .loading {
    border: 16px solid #000;
    border-top: 16px solid ${({ theme }) => theme.colors.hover};
    border-radius: 100%;
    height: 100px;
    width: 100px;
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
