import { styled } from "styled-components";
import LeftSide from "../LeftSide/LeftSide2";
import RightSide from "../RightSide";
import MidSide from "../MidSide";

export const Flex = styled.div`
  display: flex;
  position: relative;
`;

export default function Sides() {
  return (
  <>
    <Flex>
      <LeftSide/>
      <MidSide/>
      <RightSide/>
    </Flex>
    </>
  )
}
