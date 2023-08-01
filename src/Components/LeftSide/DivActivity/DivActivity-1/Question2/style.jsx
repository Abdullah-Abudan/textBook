import { styled } from "styled-components";

export const Img = styled.img`
object-fit: contain;  
`;

export const DivFlex = styled.div`
display: flex;
gap: 20px;
`;

export const DivInputName = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

export const DivQusetion = styled.div`
background-color: #fff0e5;
font-size: 24px;
margin-top: 6px;
padding: 6px;
font-weight: bold;
padding-right: 30px;// 19px to 30px because flipBook;
`;

export const Span = styled.span`
color: #cd552d;
`;


export const DivBorder = styled.div`
width: 20px;
height: 120px;
background-color: hsl(27.5deg 87.8% 83.92%);
display: flex;
flex-direction: column;
gap: 20px;
border-radius: 16px;
position: relative;
`;

export const BorderText = styled.span`
font-size: 40px;
position: absolute; 
text-shadow: 1px 1px #fff, -1px 1px #fff, 1px -1px #fff, -1px -1px #fff, 1px 1px 5px #555;
`;
export const DivFlexActivity = styled(DivFlex)`
  justify-content: space-evenly;
`;