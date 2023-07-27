import { BottomSpan, PageBind, TopSpan } from "./style";

const MidSide = () => {
    return (
    <div > {/*style={{width:"2%"}}  I disabled it because I'm going to use it for a flipbook component */}
      <PageBind>
        <TopSpan/>
        <BottomSpan/>
      </PageBind>
      </div>
    );
  };
  
  export default MidSide;
  