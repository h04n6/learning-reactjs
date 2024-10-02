import logo from "./logo.svg";
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/state/Toggle";
import Game from "./components/tictactoe/Game";

function FeatureComponent() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  const name = "hwang-dev";
  return (
    // <YoutubeList>
    //   {name}
    //   {/* <h1>Lorem xin chao maybe line cac thu cac thu</h1> */}
    // </YoutubeList>
    // <Toggle></Toggle>
    <Game></Game>
  );
}

export default App;
