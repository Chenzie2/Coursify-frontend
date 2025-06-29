import React from "react";
import facebookIcon from "../src/images/icons8-facebook-50.png";
import twitterIcon from "../src/images/icons8-twitter-50.png"
import instagramIcon from "../src/images/icons8-instagram-logo-50.png";
import LinkedInIcon from "../src/images/icons8-linkedin-50.png"
import TiktokIcon from "../src/images/icons8-tiktok-50.png"
import YoutubeIcon from "../src/images/icons8-youtube-50.png"

function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-white py-6 px-6 flex justify-between items-center">
      <span className="text-sm text-black">Copyright &copy; 2025 Coursify</span>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={YoutubeIcon} alt="Facebook" className="h-6 w-6" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={TiktokIcon} alt="Facebook" className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="Facebook" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;