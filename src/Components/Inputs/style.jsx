import { styled } from "styled-components";

export const StructureInputsWrapper = styled.div`
display: flex;
justify-content: space-around;
width: 150px;
border-radius: 40px;
border: 2px solid hsl(358.16deg 67.08% 52.35%);
padding: 10px;
position: ${(props) => (props.noAbsolute ? "" : "absolute")};
right: 20px;

`;

export const Input = styled.input`
width:calc(100% / 4 - 6px);

border: none;
border-radius: 0;
outline: none;
font-size: 1.5rem;
color: ${(props) => (props.color ? "hsl(203.86deg 100% 33.53%)" : "orange")};;
background-color: transparent;
border-left: 2px solid red; // i want add this beacause the after not work
&:last-child{
  border-left: none;
}
/* &:not(:last-child):after {
    content: "";
    border-left: 2px solid red;
    padding-left: 10px;
} */
`;