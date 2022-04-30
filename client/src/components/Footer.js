import React from "react";
import '../index.css';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4" style={{ position: "fixed", bottom: "0", height: "125px"}}>
      <div style={{fontSize: "30px", fontFamily: "'Tapestry', cursive", marginLeft: "20%" }}>
        @2022 By Criste Phillips, Diana Taylor, Savannah Polcen, and Sabrina
        Zanin
      </div>
    </footer>
  );
};

export default Footer;
