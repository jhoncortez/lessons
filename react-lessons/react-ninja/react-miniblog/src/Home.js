import { useState } from "react";
import BlogList from "./components/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
      {title: "First blog", body:"this is the body of the blog", author: "jon", id: 1},
      {title: "Second blog", body:"this is the body of the blog", author: "jon", id: 2},
      {title: "Third blog", body:"this is the body of the blog", author: "jon", id: 3},
      {title: "FOurth blog", body:"this is the body of the blog", author: "jon", id: 4}
    ]);

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlogs(newBlogs)
    }

    return (
      <div className="home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete} />
      </div>
    );
  }
   
  export default Home;
  