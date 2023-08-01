import { styled } from "styled-components";

export const Img = styled.img`
  object-fit: contain;
`;

export const DivQusetion = styled.div`
  background-color: #fff0e5;
  font-size: 24px;
  margin-top: 6px;
  padding: 6px;
  font-weight: bold;
  padding-right: 19px;
`;

export const Span = styled.span`
  color: #cd552d;
`;

export const Div = styled.div`
  clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
  background-color: #ffb011;
  width: 300px;
  height: 100px;
  position: relative;
  padding: 0 20px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isWrong ? "red" : props.isNewStyle === "correct" ? "green" : "#fff")};
  border: 1px solid #3e3e3e;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.isNewStyle === "correct" ? "#fff" : "#000")};
  cursor: pointer;
`;
export const SPAN = styled.span`
position: absolute;
top: 50%;
transform: translateY(-50%);
z-index: 22;
color: black;
font-weight: bold;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
gap: 3px;

`;