import './App.css';
// import Test, {PI} from "./addMod";
import {PI, Test}from "./addMod";

function App() {

  return (
    <div className="App">
     <Test />
     <h1>원주율: {PI}</h1>
    </div>
  );
}

export default App;
