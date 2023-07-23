import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0; 
`;

const CustomButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  padding: 10px 0;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid #17a2b8;
  background: #17a2b8;
  &:hover {
    background-color: transparent;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  ${CustomButtonContainer}:hover & {
    color: #17a2b8;
    transition: all 1s linear;
  }
`;

const CustomButton = () => {
  return (
    <Container>
      <CustomButtonContainer>
        <Button>مراجعة قبل الانهاء</Button>
      </CustomButtonContainer>
    </Container>
  );
};

export default CustomButton;
