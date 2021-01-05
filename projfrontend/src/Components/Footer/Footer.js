import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* <span className="copy"><strong> &copy; Copyright 2020 </strong></span> */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3D4sAKQbXFvfurhrZob79nnQddDUqaUfeRbszIdKpCi3trw/viewform">
        <button className="button">
          <strong>CONTACT US</strong>
        </button>
      </a>
    </footer>
  );
}

export default Footer;
