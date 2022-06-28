import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPost from "./components/BlogPost";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}>
            <Route path=":blogId" element={<BlogPost />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
