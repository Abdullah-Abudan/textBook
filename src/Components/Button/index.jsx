import React from "react";
import "./style"
import { Button, Chevron, Container, CustomButtonContainer, MouseButtonDown } from "./style";
const CustomButton = () => {
  return (
    <Container>
      <CustomButtonContainer>
      <MouseButtonDown>
        <Chevron/>
        <Chevron/>
        <Chevron/>
        </MouseButtonDown>
        <Button>مراجعة قبل الانهاء</Button>
      </CustomButtonContainer>
    </Container>
  );
};

export default CustomButton;
