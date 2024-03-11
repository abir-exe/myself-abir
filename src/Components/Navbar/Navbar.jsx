import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/" smooth={true} duration={1000} offset={-70}>
          Home
        </NavLink>
      </li>
      <li>
        <Link to="about" smooth={true} duration={1000} offset={-70}>
          About Me
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={1000} offset={-70}>
          My Skills
        </Link>
      </li>
      {/* <li>
        <Link to="experience" smooth={true} duration={1000} offset={-70}>
          My Experience
        </Link>
      </li> */}
      <li>
        <Link to="projects" smooth={true} duration={1000} offset={-70}>
          My Projects
        </Link>
      </li>
      <li>
        <Link to="education" smooth={true} duration={1000} offset={-70}>
          Education
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={1000} offset={-70}>
          Contact Me
        </Link>
      </li>
      <li>
        <NavLink to="/blogs" smooth={true} duration={1000} offset={-70} className="hidden">
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer fixed z-10 bg-opacity-50 bg-[#151515]">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link  className="flex-1 px-2 mx-2 font-extrabold text-2xl cursor-help" to="about" smooth={true} duration={1000} offset={-70}>
            Abir Mahmud
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal font-bold">
              {/* Navbar menu content here */}
              {navItems}
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
