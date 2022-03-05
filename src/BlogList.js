import './index.css';



const BlogList = ({ blogs }) => {
    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
              <div className="img-blog">
                  <img src={blog.banner} alt="" /></div>
              
            
            <h2>{ blog.title }</h2>
            <p>{ blog.body }</p>
            <button>Read more</button>
         
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;