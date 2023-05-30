import styled from "styled-components";

export const ContactContainer = styled.section`
  form {
    label {
      display: block;
    }
    input {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
    p {
      margin: 0 0 25px;
      color: #e60000;
    }
    button {
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.secondary};
      border: 0;
      color: #fff;
      border-radius: 5px;
      font-weight: 750;

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.hover};
      }

      &:disabled {
        background-color: #595959;
      }
    }
  }
`;
