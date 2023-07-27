import { styled } from "styled-components";

export const BookContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  background: #17a2b8;
  border: 1px solid #17a2b8;
  border-radius: 10px;
  box-shadow: inset 1px 0 1px #bcbcbc;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  padding: 10px;
`;

export const StyledDiv = styled.div`
  border: 2px solid transparent;
  width: 20%;
  height: 20px;
  background-color: ${(props) =>props.black ? 'hsl(180deg 5.38% 18.24%)' : "hsl(0deg 0% 100%)"};;
`;