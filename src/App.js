import { styled } from "styled-components";
import GlobalStyle from "./Global";
import Router from "./Router";
import background from "./Images/background.png"
import CustomButton from "./Components/Button";
const Background = styled.div`
background-image: url(${background});
background-repeat: no-repeat;
background-position: center center;
background-size:cover ;
min-height: 100%;
`

function App() {
  return (
    <div className="App">
      <Background>
      <GlobalStyle/>
      <Router/>
      <CustomButton/>
      </Background>

    </div>
  );
}

export default App;
