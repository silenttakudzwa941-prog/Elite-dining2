import "./About.css";


function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Elite Dining</h1>
          <p>
            Where exceptional cuisine meets unforgettable experiences.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <h2>Our Story</h2>

          <p>
            Elite Dining was founded with a passion for creating memorable
            dining experiences through exceptional food, impeccable service,
            and elegant surroundings. Our chefs combine traditional culinary
            techniques with modern innovation to create dishes that delight
            every guest.
          </p>

          <p>
            Every ingredient is carefully selected from trusted suppliers to
            ensure the highest quality in every meal we serve. From intimate
            dinners to special celebrations, Elite Dining is dedicated to
            making every visit extraordinary.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Why Choose Us</h2>

          <div className="values-grid">
            <div className="value-card">
              <h3>🍽 Premium Cuisine</h3>
              <p>
                Expertly crafted dishes prepared using the finest ingredients.
              </p>
            </div>

            <div className="value-card">
              <h3>⭐ Exceptional Service</h3>
              <p>
                Our staff is committed to providing world-class hospitality.
              </p>
            </div>

            <div className="value-card">
              <h3>🥂 Elegant Atmosphere</h3>
              <p>
                A sophisticated environment perfect for any occasion.
              </p>
            </div>

            <div className="value-card">
              <h3>🌍 Fresh Ingredients</h3>
              <p>
                Locally sourced and carefully selected for quality and flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="chef-section">
        <div className="container">
          <h2>Meet Our Executive Chef</h2>

          <p>
            Our award-winning culinary team is led by an experienced executive
            chef dedicated to innovation, creativity, and excellence. Every
            dish reflects our commitment to quality and culinary artistry.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;