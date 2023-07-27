import { styled } from 'styled-components';

export const Flex = styled.div`
display: flex;
align-items: center;
padding: 0 20px;
gap: 20px;
min-height: 40vh;
`;
export const Rightside = styled.div`
//width:49%; // I disabled it because I'm going to use it for a flipbook component
position:relative;
direction: rtl;
overflow-y: auto;
`;