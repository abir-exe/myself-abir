import resume from "../../../../public/resumeOfAbir.pdf";

const Banner = () => {
    return (
        <div id="banner"
      className="hero min-h-screen text-end"
      style={{
        backgroundImage: "url(https://i.ibb.co/DLs48DR/maik-jonietz-y-Mcii-St-Jy-Y-unsplash.jpg)",
      }}
    >
       <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-end md:ml-96  text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">I am Abir Mahmud</h1>
          <h2 className="text-2xl font-semibold">A MERN Stack Web Developer</h2>
          <p className="mb-5">
          I take delight in building websites with MongoDB, Express, React, and Node.js.
          <br />
          My commitment is to develop user-friendly solutions that genuinely meet the needs of clients and users.
          </p>
          <button className="btn btn-outline text-white"><a href={resume} download={true}>Download Resume</a></button>
        </div>
      </div> 
    </div>
    );
};

export default Banner;