import GlobalStyle from "./Global";
import Router from "./Router";
import CustomButton from "./Components/Button";
import { Background } from "./Components/Background";
import MyAlbum from "./Components/FlipBook";


function App() {
  return (
    <div className="App">
      <Background>
      <GlobalStyle/>
      {/* <Router/> */}
      <MyAlbum/>
      <CustomButton/>
      </Background>

    </div>
  );
}

export default App;
