import styled from "@emotion/styled";

export const Header = styled.header`

    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4354b0;
    min-height: 55px;
`;

export const Form = styled.form`
  &.form {
    display: flex;
    width: 30%;
    .input {
      height: 40px;
      width: 80%;
    }
    .button {
      width: 20%;
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

