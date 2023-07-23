import Pagination from "./Components/Pagination";
import GlobalStyle from "./Global";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router/>
      <Pagination/>

    </div>
  );
}

export default App;
