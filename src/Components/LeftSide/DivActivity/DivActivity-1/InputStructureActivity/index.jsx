import { useState } from "react";
import { styled } from "styled-components";

export const StructureInputsWrapper = styled.div`
display: flex;
justify-content: space-around;
width: 355px;
border-radius: 40px;
border: 2px solid hsl(358.16deg 67.08% 52.35%);
padding: 10px;
`;

export const Input = styled.input`
width:calc(100% / 5 - 10px);
border: none;
border-radius: 0;
outline: none;
font-size: 2.5rem;
color: hsl(203.86deg 100% 33.53%);
background-color: transparent;
border-left: 2px solid red; // i want add this beacause the after not work
&:last-child{
  border-left: none;
}
/* &:not(:last-child):after {
    content: "";
    border-left: 1px solid red;
    padding-left: 20px;
} */
`;
export const StructureInputsActivity = () => {
    // to save the value
    const [inputValues, setInputValues] = useState({
        input2: '',
        input3: '',
        input4: '',
      });
      const handleInputChange = (e, inputField) => {
        const value = e.target.value;
        setInputValues((prevValues) => ({ ...prevValues, [inputField]: value }));
      };

    return (
      <StructureInputsWrapper>
        
        <Input type="text" value={'زُ'} readonly/>
        <Input type="text" maxLength="1" value={inputValues.input2} onChange={(e) => handleInputChange(e, 'input2')}  />
        <Input type="text" maxLength="1" value={inputValues.input3} onChange={(e) => handleInputChange(e, 'input3')} />
        <Input type="text" maxLength="1" value={inputValues.input4} onChange={(e) => handleInputChange(e, 'input4')}  />
        <Input type="text" value={'ءٌ'} readonly />

      </StructureInputsWrapper>
    );
  };