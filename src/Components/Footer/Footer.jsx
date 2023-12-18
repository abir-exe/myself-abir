import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-8 bg-base-300 text-base-content ">
<div className=" flex gap-5">
    <Link to="https://www.linkedin.com/in/web-abirmahmud/" className="text-2xl hover:text-xl hover:text-black"><FaLinkedin></FaLinkedin></Link>
    <Link to="https://www.facebook.com/abir.mahmudXD" className="text-2xl  hover:text-xl hover:text-black"><FaFacebook></FaFacebook></Link>
    <Link to="https://www.twitter.com/abirmahmud_" className="text-2xl  hover:text-xl hover:text-black"><FaTwitter></FaTwitter></Link>
    <Link to="https://instagram.com/abiir_asholeii/" className="text-2xl  hover:text-xl hover:text-black"><FaInstagram></FaInstagram></Link>
    <Link to="https://github.com/abir-exe" className="text-2xl  hover:text-xl hover:text-black"><FaGithub></FaGithub></Link>
</div>
  <aside>
    <hr />
    <p>© 2023 Abir Mahmud. All rights reserved.</p>
  </aside>
</footer>
    );
};

export default Footer;