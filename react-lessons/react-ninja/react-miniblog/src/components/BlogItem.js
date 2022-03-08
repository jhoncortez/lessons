const BlogItem = ({ item, handleDelete }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
        <div className="blog-preview" key={item.id} >
            <h2>{ item.title }</h2>
            <p>Written by { item.author }</p>
            <buton onClick={() => handleDelete(item.id)} >Delete Item</buton>
        </div>
    );
  }
   
  export default BlogItem;