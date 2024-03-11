import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-8 bg-base-300 text-base-content ">
<div className=" flex gap-1">
    <Link to="https://www.linkedin.com/in/web-abirmahmud/" className="text-2xl hover:text-xl hover:text-black p-1 duration-700"><FaLinkedin></FaLinkedin></Link>
    <Link to="https://www.facebook.com/abir.mahmudXD" className="text-2xl  hover:text-xl hover:text-black p-1 duration-700"><FaFacebook></FaFacebook></Link>
    <Link to="https://www.twitter.com/abirmahmud_" className="text-2xl  hover:text-xl hover:text-black p-1 duration-700"><FaTwitter></FaTwitter></Link>
    <Link to="https://instagram.com/abiir_asholeii/" className="text-2xl  hover:text-xl hover:text-black p-1 duration-700"><FaInstagram></FaInstagram></Link>
    <Link to="https://github.com/abir-exe" className="text-2xl  hover:text-xl hover:text-black p-1 duration-700"><FaGithub></FaGithub></Link>
</div>
  <aside>
    <hr />
    <p className="hover:text-black duration-200 cursor-none">© 2024 Abir Mahmud. All rights reserved.</p>
  </aside>
</footer>
    );
};

export default Footer;