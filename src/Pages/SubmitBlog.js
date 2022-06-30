import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitBlog = ({ blogs, setBlogs }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const createNewPost = () => {
    const createdAt = new Date().toISOString();
    const id =
      blogs
        .map((blog) => blog.id)
        .sort()
        .reverse()[0] + 1;
    const newPost = { createdAt, title, text, author, id };
    setBlogs([...blogs, newPost]);
  };

  return (
    <div>
      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        placeholder="Text"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <input
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <button
        onClick={() => {
          createNewPost();
          setTitle("");
          setText("");
          setAuthor("");
          navigate("/blogs");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitBlog;
