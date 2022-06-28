import { useParams } from "react-router-dom";
import { blogPosts } from "../utils/sampleBlogs";
import "../App.css";

const BlogPost = () => {
  const params = useParams();
  const blog = blogPosts.find((blog) => blog.id === Number(params.blogId));
  return (
    <div>
      <p>
        Title: <span>{blog.title}</span>
      </p>
      <p>
        Text: <span>{blog.text}</span>
      </p>
      <p>
        Author: <span>{blog.author}</span>
      </p>
      <p>
        Created At: <span>{blog.createdAt}</span>
      </p>
      <p>
        ID:<span> {blog.id}</span>
      </p>
    </div>
  );
};

export default BlogPost;
