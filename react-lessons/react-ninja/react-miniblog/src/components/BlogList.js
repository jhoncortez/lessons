import BlogItem from "./BlogItem";
const BlogList = ({ blogs, title, handleDelete}) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(blogs);

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <BlogItem item={blog} handleDelete = {handleDelete} />
      ))}
    </div>
  );
}
 
export default BlogList;