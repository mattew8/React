import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Navi from "./components/Navi";
function App() {
  return (
    <div className="App" style={{ width: "80%", margin: "0 auto" }}>
      <Navbar />
      <Navi />
    </div>
  );
}

export default App;
