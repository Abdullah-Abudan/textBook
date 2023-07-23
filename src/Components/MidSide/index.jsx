import styled from 'styled-components';
import pin from "../../Images/pin.png";

const PageBind = styled.div`
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    position: relative;
    top: 5px;
    float: right;
    z-index: 100;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -11px;
    width: 2em;
    bottom: 0;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent 0,
      rgba(0, 0, 0, 0.2) 46%,
      rgba(0, 0, 0, 0.5) 49%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.5) 51%,
      rgba(0, 0, 0, 0.2) 52%,
      transparent
    );
    z-index: 1;
  }
`;

const TopSpan = styled.span`
  @media screen and (min-width: 768px) {
    background-image: url(${pin});
    background-position: 0 5px;
    float: left;
    height: 30px;
    left: -12px;
    position: absolute;
    width: 20px;
    z-index: 200;
    top: 25px;
  }
`;

const BottomSpan = styled.span`
  @media screen and (min-width: 768px) {
    background-image: url(${pin});
    background-position: 0 5px;
    float: left;
    height: 30px;
    left: -12px;
    position: absolute;
    width: 20px;
    z-index: 200;
    bottom: 25px;
  }
`;
const MidSide = () => {
    return (
    <div style={{width:"2%"}}>
      <PageBind>
        <TopSpan/>
        <BottomSpan/>
      </PageBind>
      </div>
    );
  };
  
  export default MidSide;
  