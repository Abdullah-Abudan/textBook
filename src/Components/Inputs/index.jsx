import { Input, StructureInputsWrapper } from "./style";

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