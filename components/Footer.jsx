import React from "react";

const Footer = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29535.2986631606!2d87.90135362400996!3d22.281310472704394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a029468ff8b0861%3A0x840f598cf7d1747f!2sTamluk%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1679307320991!5m2!1sen!2sin"
        className="w-full h-[80%] border-none "
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <footer className="footer footer-center p-4 bg-skin-dark text-skin-muted">
        <div>
          <p>
            Copyright © 2021 - All right reserved by Logicro software solution
            is PVT LTD
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
