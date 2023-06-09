import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 20px 10px;
  border: 1px solid rgb(191, 192, 192);
`;

export const Button = styled.button`
  width: 120px;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  /* text-transform: capitalize; */
  cursor: pointer;

  overflow: hidden;
  color: #333;
  background-color: rgb(227, 227, 227);
  border: 1px solid rgb(193, 193, 193);
  border-radius: 4px;
  transition: all 0.45s ease-Out;

  :hover {
    background-color: rgba(185, 183, 240, 0.8);
    box-shadow: inset rgb(158, 158, 158) 0px 0px 16px 2px;
  }
`;
