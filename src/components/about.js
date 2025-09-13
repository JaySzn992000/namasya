import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AboutPickle from "../Slider/AboutPickle.png";
import { Helmet } from "react-helmet";
import "./about.css";

const Aboutus = () => {

return (

<div>

<Helmet>
<title>About Us | Pickle - Authentic Handcrafted Pickles</title>
<meta
name="description"
content="Discover the story behind Pickle - your go-to destination for handcrafted, traditional Indian pickles made with fresh ingredients and no preservatives."
/>
<meta
name="keywords"
content="Handmade Pickles, Traditional Indian Pickles, Desi Achar, Homemade Pickle, Authentic Pickles, Mango Pickle, Lemon Pickle"
/>
</Helmet>

{/*  */}

<Navbar></Navbar>

<main className="about_flex_">

<img 
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src={AboutPickle}></img>

<section>

<h1>About !</h1>
<h2>Namasya - Weaving Elegance with Tradition !</h2>
<p>
{" "}
At Namasya, we celebrate the timeless elegance of sarees 
by blending tradition with modern style. Every saree in our 
collection is thoughtfully crafted to reflect India's rich 
heritage while meeting the fashion needs of today's women. 
From graceful classics to contemporary drapes, we bring you 
sarees that are made with premium fabrics, intricate detailing, 
and a promise of quality. At Namasya, we believe a saree is not 
just attire, it is a symbol of grace, culture, and confidence — 
making every woman feel beautiful in her own unique way.
</p>
</section>

</main>


{/*  */}

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Aboutus;
