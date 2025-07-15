import './App.css';
// import Test, {PI} from "./addMod";
import {PI as p, Test as Ts} from "./addMod";
import Header from './components/Header';

function App() {
  
  return (
    <div className="App">
      <Ts />
      <h1>원주율: {p}</h1>
      <Header />
    </div>
  );
}

export default App;