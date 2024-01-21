const Blog = ({blog}) => {
    console.log(blog)
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <h2 className="">{blog.category}</h2>
        <p>{blog.publish_date}</p>
        <p>{blog.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-ghost glass">Read More...</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
