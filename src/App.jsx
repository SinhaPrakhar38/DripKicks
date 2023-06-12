import React from "react";
import Navbar from "./Navbar";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css"; // Import the CSS file for styling

function Shoe({ name, price, description, image }) {
  const handleBuyNow = () => {
    // Handle the buy now action here
    console.log(`Buy ${name}`);
  };

  return (
    <div className="shoe">
      <div className="shoe-image">
        <img src={image} alt={name} />
      </div>
      <div className="shoe-details">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <button className="buy-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <h1 className="sassy-dialogue">Step into the World of Rarified Shoes!</h1>
      <div className="category-images">
        <div className="category-image">
          <img src="https://ae01.alicdn.com/kf/HTB1mE06mXooBKNjSZFPq6xa2XXa8/2018-Autumn-Sneakers-Women-White-Canvas-Shoes-Ladies-Flat-Heel-Casual-Shoes-Woman-White-Sneakers-Women.jpg" alt="Sneakers" />
          <p>Sneakers</p>
        </div>
        <div className="category-image">
          <img src="https://i.etsystatic.com/13617448/r/il/2cf54c/1704080154/il_fullxfull.1704080154_dwf0.jpg" alt="Loafers" />
          <p>Loafers</p>
        </div>
      </div>
      <div className="shoe-container">
        <Shoe
          name="Nike Air Jordan"
          price={120}
          description="A classic choice for the uber modern, a blend of rich history from the legend of Basketball Michael Jordan and greatness in one shoe."
          image="https://thesource.com/wp-content/uploads/2019/05/air-jordan-4-bred-001.jpg"
        />
        <Shoe
          name="Adidas Ultraboost"
          price={150}
          description="Your favourite athletes favourite shoes, an ever classic design paired the boost from the NRG outsole with power to give back energy."
          image="https://cdn.sanity.io/images/c1chvb1i/production/cd0f052dc8b293b2626d748b4bf72c34f36c7948-1100x735.jpg/ULTRABOOST_WMNS_WHT-BB6308-1.jpg.jpg"
        />
         <Shoe
          name="Vans Old Skool"
          price={80}
          description="Vans Old Skool shoes are iconic and timeless sneakers known for their classic skateboarding style. "
          image="https://cdn.shopify.com/s/files/1/1202/6102/products/vans-old-skool-black-white-2.jpg?v=1482167737.jpg"
        />
         <Shoe
          name="Converse Chucks"
          price={100}
          description="Converse Chuck Taylor All Star shoes, also known as 'Chucks' are legendary sneakers that have stood the test of time."
          image="https://images.journeys.com/images/products/1_5122_ZM_C-HERO1.JPG"
        />
        {/* Add more Shoe components here */}
      </div>
      <footer className="footer">
        <div className="social-media-icons">
          <a href="https://twitter.com/TTripnature">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/rishi__sinha">
            <FaInstagram />
          </a>
          <a href="https://github.com/SinhaPrakhar38">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/PrakharSinha">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-content">
          <p className="footer-paragraph">
            Made by Prakhar with a little help from ☕
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
