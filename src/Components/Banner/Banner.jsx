import Lottie from "lottie-react";
import bannerAni from "../../assets/animation/Animation - 1739334089296.json";
import "./Banner.css"; 

const Banner = () => {
  return (
    <div className="banner-container container">
      {/* Left Section */}
      <div className="banner-left">
        <h1 className="banner-heading">Sonia Akter</h1>

        {/* Rotating Skills Animation */}
        <div className="card">
          <div className="loader">
            <p className="static-text">I am a</p>
            <div className="words">
              <span className="word">Developer</span>
              <span className="word">UI/UX Designer</span>
              <span className="word">SEO Expert</span>
              <span className="word">Code Architect</span>
              <span className="word">Web Strategist</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <p className="banner-intro">
        I’m a passionate software engineer with expertise in frontend development and currently learning backend. I have a keen eye for detail and always strive to create innovative, user-focused products that make a positive impact.
        </p>

        {/* CV Download Button */}
        <a href="/path-to-cv" download>
          <button className="cv-btn">Download CV</button>
        </a>
      </div>

      {/* Right Section (Lottie Animation) */}
      <div className="banner-right">
        <Lottie animationData={bannerAni} loop={true} className="lottie-animation" />
      </div>
    </div>
  );
};

export default Banner;
