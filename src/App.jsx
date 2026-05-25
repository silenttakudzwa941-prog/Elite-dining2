
import hideout1 from './assets/hideout1.jpg'
import hideout2 from './assets/hideout2.jpg'
import hideout3 from './assets/hideout3.jpg'
import './App.css'

function App() {
  
  return (
    <>
<nav class="navbar">
    <h1 class="logo">Elite Dining</h1>
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
    <h2>Our Hideout</h2>
    <div class="gallery-container">
        <img src={hideout1} alt="Gallery Image" />
        <img src={hideout2} alt="Gallery Image" />
        <img src={hideout3} alt="Gallery Image" />
        </div>
</section>
<section id="gallery" class="gallery">
    <h2>Our Hideout</h2>
    <div class="gallery-container">
        <img src={hideout1} alt="Gallery Image" />
        <img src={hideout2} alt="Gallery Image" />
        <img src={hideout3} alt="Gallery Image" />
        </div>
</section>
<section id="gallery" class="gallery">
    <h2>Our Hideout</h2>
    <div class="gallery-container">
        <img src={hideout1} alt="Gallery Image" />
        <img src={hideout2} alt="Gallery Image" />
        <img src={hideout3} alt="Gallery Image" 
        img src={hideout1} alt="Gallery Image" />
        <img src={hideout2} alt="Gallery Image" />
        <img src={hideout3} alt="Gallery Image"/>
        </div>
</section>

<footer id="contact">
   <footer id="contact">
    <div class="contact-card">
        <h3>Contact Us</h3>
        <p>Email: silenttakudzwa941@.com</p>
        <p>Phone: +263 775 496 377</p>
        <p>Location: Marondera, Zimbabwe</p>

        <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i> Facebook</a>
            <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
            <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
            <a href="#"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        </div>
    </div>
</footer>


</footer>
   </>
  )
}

export default App
