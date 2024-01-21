import { useLoaderData } from "react-router-dom";
import BlogsFooter from "../Components/Footer/BlogsFooter";
import BlogsNavbar from "../Components/Navbar/BlogsNavbar";
import Blog from "../Components/Blog/Blog";


const BlogsLayout = () => {

    const blogs = useLoaderData();
    console.log(blogs);
    

    return (
        <div className="min-h-screen">
            <BlogsNavbar></BlogsNavbar>
            
            <div className="grid grid-cols-3 gap-2 mb-2 px-10">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
            <BlogsFooter></BlogsFooter>
        </div>
    );
};

export default BlogsLayout;