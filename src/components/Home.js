import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import BottomFavcomp from "../componentsBoot/bottomFavcomp";
import Contactus from "./Contactus";
import Slider from "../slider";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import "./ProductListmodule.css";
import "./Home.css";
import Pickle from "../Products/Pickle";
import Topnav from "../headers_footer/Topnav";
import SlidCakeImg from "../Slider/CakeSlide.jpg";
import Namasyaa from "../Slider/namasyaa.jpg";
import VideoSliderComponent from "../videoslider";
// import TestimonialSlider from "./Testimonial";
// import CategoryMangoes from "../Products/CategoryMangoes";
// import DeliveryBanner from "../OtherImages/DeliveryBanner.jpg";
// import CategoryChilli from "../Products/CategoryChilli";
// import CategoryMixed from "../Products/CategoryMixed";
// import Message from "./Message";


const Home = () => {

const [showFilters, setShowFilters] = useState(false);

const [formData, setFormData] = useState({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const sendEmail = (e) => {
e.preventDefault();

const emailData = {
to_email: formData.recipientEmail,
name: formData.email,
email: formData.email,
message: formData.message,
to_name: formData.email,
reply_to: formData.email,
};

emailjs
.send(
process.env.REACT_APP_EMAILJS_SERVICE_ID,
process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
emailData,
process.env.REACT_APP_EMAILJS_USER_ID
)
.then(
(response) => {
console.log(
"You have successfully subscribe !",
response.status,
response.text
);
setFormData({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});
setSuccessMessage("Message sent successfully!");
},
(err) => {
console.error("Failed to send email. Error:", err);
setSuccessMessage("Failed to send message. Please try again.");
}
);
};

const naviGateProductsAll = useNavigate()
const seeAllProducts = () => {
naviGateProductsAll('/ProductList')
}


return (

<div>

<Helmet>
<title>Buy Best Homemade Pickles Online | Pickles & More</title>
<meta
name="description"
content="Explore 100+ delicious homemade pickles including mango, garlic, carrot & more. Fast delivery across India."
/>
<meta
name="keywords"
content="Pickles, Homemade Achaar, Mango Pickle, Buy Pickles Online, Indian Pickles"
/>
<link rel="canonical" href="https://yourdomain.com" />
<meta property="og:title" content="Pickles & More - Authentic Homemade Pickles" />
<meta property="og:description" content="Discover tasty and hygienically packed pickles. Subscribe for updates and offers." />
<meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg" />
<meta property="og:url" content="https://yourdomain.com" />
<meta name="robots" content="index, follow" />
</Helmet>

<Topnav></Topnav>
<Navbar />

<div className="Catelog_Items">
<div>
<img src="https://www.koskii.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0049%2F3649%2F9315%2Ffiles%2FSSUS0044108_BLACK_1_800x800.jpg%3Fv%3D1750831460&w=1920&q=75" 
loading="lazy"
alt="Bitter"></img>
<h4>Black Bling</h4>
</div>

<div>
<img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/SSUS0044218_ROYAL_BLUE_PARROT_GREEN_1_800x800.jpg?v=1747723892&width=1200" 
loading="lazy"
alt="Desi Ghee"></img>
<h4>Royal Blue</h4>
</div>

<div>
<img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/SSUS0044216_PINK_ORANGE_1_800x800.jpg?v=1747995697&width=1200" 
loading="lazy"
alt="Garlic"></img>
<h4>Pink Zariwork soft</h4>
</div>

<div>
<img src="https://www.koskii.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0049%2F3649%2F9315%2Ffiles%2FSSUS0046246_RANI_PINK_1_800x800.jpg%3Fv%3D1757922576&w=1920&q=75" 
loading="lazy"
alt="Ginger"></img>
<h4>Pink Katdana</h4>
</div>

<div>
<img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/SSUS0047733_TURQUOISE_BLUE_1_800x800.jpg?v=1763386170&width=1200" 
loading="lazy"
alt="Radish"></img>
<h4>Turquoise Blue</h4>
</div>

<div>
<img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/SSUS0046318_RUST_1_800x800.jpg?v=1764413219&width=1200" 
loading="lazy"
alt="Jackfruit"></img>
<h4>Rest Threadwork</h4>
</div>

<div>
<img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/SSUS0044116_PISTA_GREEN_1_800x800.jpg?v=1752040860&width=1200" 
loading="lazy"
alt="Banana"></img>
<h4>Pista Green</h4>
</div>

<div>
<img src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/SSUS0044115_CREAM_MULTI_1_800x800.jpg?v=1750847036&width=1200" 
loading="lazy"
alt="Sudh Ghee"></img>
<h4>Cream Zariwork</h4>
</div>
</div>

<Slider />

{/* <VideoSliderComponent></VideoSliderComponent> */}

<div className="tshirt_Left">
<Pickle showFilters={showFilters} limit={10}></Pickle>
</div>

{/*  */}


{/*  */}

<button onClick={seeAllProducts} className="seeLLProducts">View All</button>

<div id="bottomFav_comp">
<BottomFavcomp />
</div>

{/*  */}

<div className="tshirt_Left">
<Pickle showFilters={showFilters} limit={10}></Pickle>
</div>

<button onClick={seeAllProducts} 
className="seeLLProducts">View All</button>

{/*  */}

<Contactus></Contactus>

<a
href='https://api.whatsapp.com/send/?phone=%2B919821187225&text&type=phone_number&app_absent=0'
target="_blank"
rel="noopener noreferrer"
>
<img
className="whatsapp_message"
src="https://cdn-icons-png.freepik.com/256/3983/3983877.png?semt=ais_hybrid"
alt=""
loading="lazy"
></img>

</a>

{/*  */}

<div className="Secure_ordering">
<h2>✨ Sanskriti – A Story Woven in Every Saree
</h2>
<p>We weave sarees that are graceful, timeless, and made 
to celebrate every occasion. Each saree carries the essence 
of tradition and elegance, making your moments truly 
unforgettable.
</p>

</div>


{/* SlidCakeImg */}

<div className="subscribe_kk">

<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

</form>

</div>

{/* <VideoSliderComponent></VideoSliderComponent> */}

<Header />

</div>

);

};

export default Home;
