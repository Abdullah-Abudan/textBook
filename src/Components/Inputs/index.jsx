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
export const StructureInputs = ({noAbsolute,txt1,txt2,txt3,txt4,onChangeTxt2, onChangeTxt3,color }) => {
    return (
      <StructureInputsWrapper noAbsolute={noAbsolute}>
        
        <Input type="text" value={txt1} readonly color={color}/>
        <Input type="text" value={txt2} onChange={onChangeTxt2} maxLength={1} color={color}  /> {/* onChangeTxt2 for QPart2 input */}
        <Input type="text" value={txt3} onChange={onChangeTxt3} maxLength={1} color={color}  />
        <Input type="text" value={txt4} readonly color={color}/>

      </StructureInputsWrapper>
    );
  };