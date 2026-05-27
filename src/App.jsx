
import hideout1 from './assets/hideout1.jpg'
import hideout2 from './assets/hideout2.jpg'
import hideout3 from './assets/hideout3.jpg'
import pizza from './assets/pizza.jpg'
import spagheti from './assets/spagheti.jpg'
import cake from './assets/cake.jpg'
import {  FaWhatsapp,FaInstagram} from 'react-icons/fa' 
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

<footer id="contact">
   <footer id="contact">
    <div class="contact-card">
        <h3>Contact Us</h3>
        <p> Email: silenttakudzwa941@.com</p>
        <p>< FaWhatsapp /> Phone: +263 775 496 377</p>
        <p>< FaInstagram /> Instagram: @elitedining</p>
    </div>
</footer>


</footer>
   </>
  )
}

export default App
