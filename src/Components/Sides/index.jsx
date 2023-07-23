import { styled } from "styled-components";
import LeftSide from "../LeftSide";
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
