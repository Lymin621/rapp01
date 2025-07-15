import './App.css';
// import Test, {PI} from "./addMod";
import {PI as p, Test as Ts} from "./addMod";
import Header from './components/Header';
import Bd from "./components/Body";
import Ft from "./components/Footer";

function App() {
  
  return (
    <div className="App">
      <Ts />
      <h1>원주율: {p}</h1>
      <Header />
      <Bd />
      <Ft />
    </div>
  );
}

export default App;