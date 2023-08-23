import logo from "../assets/static/logo.svg";
import "../assets/css/App.css";
import HeaderLoco from "../components/HeaderLoco";
import Hooks from "../components/HookuseState";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <HeaderLoco></HeaderLoco>
      <Hooks></Hooks>
    </div>
  );
}

export default App;
