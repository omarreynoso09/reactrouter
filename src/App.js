import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPost from "./components/BlogPost";
import AllBlogs from "./components/AllBlogs";
import SubmitBlog from "./pages/SubmitBlog";
import blogPosts from "./utils/sampleBlogs";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState(
    JSON.parse(JSON.stringify(blogPosts.blogPosts))
  );

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}>
            <Route index element={<AllBlogs blogs={blogs} />} />
            <Route path=":blogId" element={<BlogPost blogs={blogs} />} />
            <Route
              path="submit-blog"
              element={<SubmitBlog blogs={blogs} setBlogs={setBlogs} />}
            />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
