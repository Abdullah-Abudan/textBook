import React from 'react'
import { styled } from 'styled-components';
import BorderHeader from './border-header';

const BlackBlock = styled.div`
  background-color: hsl(180deg 5.2% 33.92%);
  padding: 15px;
  width: 100%;
`;

export default function Header() {
  return (
    <div>
        <BorderHeader/>
        <BlackBlock/>
    </div>
  )
}
