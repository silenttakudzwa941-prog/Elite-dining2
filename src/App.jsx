
import hideout1 from './assets/hideout1.jpg'
import hideout2 from './assets/hideout2.jpg'
import hideout3 from './assets/hideout3.jpg'
import pizza from './assets/pizza.jpg'
import spagheti from './assets/spagheti.jpg'
import cake from './assets/cake.jpg'
import {  FaWhatsapp,FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa' 
import './App.css'

function App() {
  
  return (
    <>
<nav class="navbar">
    <h1 class="logo">Elite2 Dining</h1>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <button id="stay"onclick="goToReservation()"><a href="booking.html">Book Reservation</a></button>
</nav>
<section class="hero">
    <div class="hero-content">
        <h2>Experience Luxury Dining</h2>
        <p>Fine cuisine crafted to perfection</p>
        <button id="rsv" onclick="goToReservation()">Reserve a Table</button>
    </div>
</section>

<section id="gallery" class="gallery">
    <h2>Our Menu</h2>
    <div class="gallery-container">
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
<section id="gallery" class="gallery">
    <h2>desserts</h2>
    <div class="gallery-container">
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
<section id="gallery" class="gallery">
    <h2>Our Hideout</h2>
    <div class="gallery-container">
        <img src={hideout1} alt="Gallery Image" />
        <img src={hideout2} alt="Gallery Image" />
        <img src={hideout3} alt="Gallery Image"/> 
        <img src={hideout1} alt="Gallery Image" />
        <img src={hideout2} alt="Gallery Image" />
        <img src={hideout3} alt="Gallery Image"/>
        </div>
</section>

 <section class="hero-section">
    <h1>Elite2 Dining</h1>
  </section>

  <footer class="footer">

    <div class="footer-container">

      <div class="footer-brand">
        <h1>Elite2 Dining</h1>

        <p>
          Experience luxury dining with world-class cuisine,
          elegant ambiance, and unforgettable moments.
        </p>

        <div class="social-icons">
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

      
      <div class="footer-links">
        <h2>Quick Links</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Contact</li>
        </ul>
      </div>

      
      <div class="footer-hours">
        <h2>Opening Hours</h2>

        <p>Monday - Friday: 9AM - 11PM</p>
        <p>Saturday: 10AM - Midnight</p>
        <p>Sunday: Closed</p>
      </div>

      
      <div class="footer-card">
        <h2>Reserve a Table</h2>

        <p>
          Book your dining experience today.
        </p>

        <button>Book Now</button>
      </div>

    </div>

    
    <div class="footer-bottom">
      © 2026 Elite2 Dining. All Rights Reserved.
      <p> Email: silenttakudzwa941@.com</p>
    </div>

  </footer>


    </>
  )
}

export default App
