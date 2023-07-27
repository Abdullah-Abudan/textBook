import { useState } from "react";
import { Input, StructureInputsWrapper } from "./style";


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