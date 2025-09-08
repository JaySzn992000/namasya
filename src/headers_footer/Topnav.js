import React from "react";
import "./Topnav.css";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Topnav = () => {
return (
<div className="topnav">
<div className="topnav-left">
<p>20% off upto 2000 Rs</p>
</div>


<div className="topnav-right">
<a  rel="noreferrer"><FaWhatsapp /></a>
<a rel="noreferrer"><FaFacebookF /></a>
<a  rel="noreferrer"><FaLinkedinIn /></a>
</div>
</div>
);
};

export default Topnav;