import { useLoaderData } from "react-router-dom";
import BlogsFooter from "../Components/Footer/BlogsFooter";
import BlogsNavbar from "../Components/Navbar/BlogsNavbar";
import Blogs from "../Pages/Blogs/Blogs";


const BlogsLayout = () => {

    const blogs = useLoaderData();
    console.log(blogs);
    

    return (
        <div className="min-h-screen">
            <BlogsNavbar></BlogsNavbar>
            <BlogsFooter></BlogsFooter>
            {
                blogs.map(blog => <Blogs></Blogs>)
            }
        </div>
    );
};

export default BlogsLayout;