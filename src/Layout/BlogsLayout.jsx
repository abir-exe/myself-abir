import BlogsFooter from "../Components/Footer/BlogsFooter";
import BlogsNavbar from "../Components/Navbar/BlogsNavbar";


const BlogsLayout = () => {
    return (
        <div className="min-h-screen">
            <BlogsNavbar></BlogsNavbar>
            <BlogsFooter></BlogsFooter>
        </div>
    );
};

export default BlogsLayout;