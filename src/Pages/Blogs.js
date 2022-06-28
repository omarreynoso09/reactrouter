import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <h1>Blogs Page</h1>
      <Outlet />
    </div>
  );
};

export default Blogs;
