import LeftSide from "../LeftSide/LeftSide2";
import RightSide from "../RightSide";
import MidSide from "../MidSide";
import { Flex } from "./style";



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
