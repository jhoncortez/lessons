import { useState } from "react";

const Home = () => {
    const [blogs, setBlog] = useState([
      {title: "First blog", body:"this is the body of the blog", author: "jon", id: 1},
      {title: "Second blog", body:"this is the body of the blog", author: "jon", id: 2},
      {title: "Third blog", body:"this is the body of the blog", author: "jon", id: 3},
      {title: "FOurth blog", body:"this is the body of the blog", author: "jon", id: 4}
    ]);

    return (
      <div className="home">
        {blogs.map( blog => (
          <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </div>
        ) )}
      </div>
    );
  }
   
  export default Home;
  