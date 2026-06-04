import "./Gallery.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    title: "Luxury Dining Area",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    title: "Signature Dish",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    title: "Fine Dining Experience",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    title: "Elegant Interior",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
    title: "Chef's Special",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    title: "Premium Dessert",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    title: "Private Dining",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Fresh Ingredients",
  },
];

function Gallery() {
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-overlay">
          <h1>Gallery</h1>
          <p>
            Explore our elegant atmosphere, exquisite cuisine,
            and memorable dining experiences.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-container">
          {galleryImages.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-info">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;