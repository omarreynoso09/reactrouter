import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes className="linkstag">
          <Route path="/" element={<Home />}></Route>

          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
