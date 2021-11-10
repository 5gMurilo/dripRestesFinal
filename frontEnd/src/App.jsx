import "./App.css";
import * as RRouter from 'react-router-dom'
import Pages from "./components/Pages";
// import * as rRouters from "react-router-dom";

function App() {
  return (
    <>
      <RRouter.BrowserRouter>
        <Pages />
      </RRouter.BrowserRouter>
      
    </>
  );
}

export default App;
