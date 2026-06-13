import "./homepage.css";
import hideout1 from '../assets/hideout1.jpg'
import hideout2 from '../assets/hideout2.jpg'
import hideout3 from '../assets/hideout3.jpg'
import pizza from '../assets/pizza.jpg'
import spagheti from '../assets/spagheti.jpg'
import cake from '../assets/cake.jpg'
import { Link } from "react-router-dom";
import {  FaWhatsapp,FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa'
export function HomePage(){
     const goToReservation = () => {
    window.location.href = "/reservation";
  };
    return(
        <>
        <nav className="navbar">
    <h1 className="logo">Elite Dining</h1>
    <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
     <button id="stay" onClick={goToReservation}>
          Book Reservation
        </button>
</nav>
<section className="hero">
    <div className="hero-content">
        <h2>Experience Luxury Dining</h2>
        <p>Fine cuisine crafted to perfection</p>
        <button id="rsv" onclick="goToReservation()">Reserve a Table</button>
    </div>
</section>

<section id="gallery" className="gallery">
    <h2>Our Menu</h2>
    <div className="gallery-container">
        <div><img src={pizza} alt="Gallery Image" />
        <h3>Pizza</h3>
<p>A delicious pizza made with fresh ingredients</p>
<p>Price: $12.99</p>
        </div>
        <div><img src={spagheti} alt="Gallery Image" />
        <h3>Spagheti</h3>
<p>A delicious spagheti made with fresh ingredients</p>
<p>Price: $14.99</p>
        </div>
        <div><img src={cake} alt="Gallery Image" />
        <h3>Cake</h3>
<p>A delicious cake made with fresh ingredients</p>
<p>Price: $12.99</p>
        </div>
       
        </div>
</section>
<section id="gallery" Name="gallery">
    <h2>desserts</h2>
    <div Name="gallery-container">
         <div><img src={hideout1} alt="Gallery Image" />
        <h3>Pan Cake</h3>
<p>A delicious pan cake made with fresh ingredients</p>
<p>Price: $12.99</p>
        </div>
         <div><img src={hideout2} alt="Gallery Image" />
        <h3>Strawberry</h3>
<p>A delicious strawberry made with fresh ingredients</p>
<p>Price: $12.99</p>
        </div>
         <div><img src={hideout3} alt="Gallery Image" />
        <h3>Ice Cream</h3>
<p>A delicious ice cream made with fresh ingredients</p>
<p>Price: $12.99</p>
        </div>
       
        </div>
</section>
<section id="gallery" Name="gallery">
    <h2>Our Hideout</h2>
    <div className="gallery-container">
        <img src={hideout1} alt="Gallery Image" />
        <img src={hideout2} alt="Gallery Image" />
        <img src={hideout3} alt="Gallery Image"/> 
        <img src={hideout1} alt="Gallery Image" />
        <img src={hideout2} alt="Gallery Image" />
        <img src={hideout3} alt="Gallery Image"/>
        </div>
</section>

 <section className="hero-section">
    <h1>Elite Dining</h1>
  </section>

  <footer className="footer">

    <div className="footer-container">

      <div className="footer-brand">
        <h1>Elite Dining</h1>

        <p>
          Experience luxury dining with world-className cuisine,
          elegant ambiance, and unforgettable moments.
        </p>

        <div className="social-icons">
          <a href="#">
            <FaFacebook/>
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            < FaTwitter/>
          </a>

          <a href="#">
            < FaWhatsapp />
          </a>
        </div>
      </div>

      
      <div className="footer-links">
        <h2>Quick Links</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Contact</li>
        </ul>
      </div>

      
      <div className="footer-hours">
        <h2>Opening Hours</h2>

        <p>Monday - Friday: 9AM - 11PM</p>
        <p>Saturday: 10AM - Midnight</p>
        <p>Sunday: Closed</p>
      </div>

      
      <div className="footer-card">
        <h2>Reserve a Table</h2>

        <p>
          Book your dining experience today.
        </p>

        <button>Book Now</button>
      </div>

    </div>

    
    <div className="footer-bottom">
      © 2026 Elite Dining. All Rights Reserved.
      <p> Email: silenttakudzwa941@.com</p>
    </div>

  </footer>
        </>
    )
}