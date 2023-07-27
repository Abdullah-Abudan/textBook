import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0; 
`;

export const CustomButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 16%;
  padding: 10px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid #17a2b8;
  background: #17a2b8;
  position: relative;



  &:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: #fff;
    transition: all 0.4s;
    transform: scale(0.2, 1);
  }
`;

export const Button = styled.button`
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
    z-index: 1;
  }
`;


export const MouseButtonDown = styled.div`
  width: 30px;
  cursor: pointer;
  position: relative;
`;

const move = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
  }
  50% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

export const Chevron = styled.div`
  width: 28px;
  height: 10px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${move} 3s ease-out infinite;

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
    border: 1px solid #17a2b8;
    border-right: 0;
  }

  &:after {
    right: 0;
    transform: skew(0deg, -30deg);
    border: 1px solid #17a2b8;
    border-left: 0;
  }

  &:first-child {
    animation: ${move} 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: ${move} 3s ease-out 2s infinite;
  }
`;