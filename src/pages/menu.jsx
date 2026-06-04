import "./Menu.css";

function Menu() {
  const menuData = {
    starters: [
      { name: "Bruschetta", price: "$8", desc: "Grilled bread topped with fresh tomatoes, basil, and olive oil." },
      { name: "Calamari", price: "$12", desc: "Crispy fried calamari served with lemon aioli." },
      { name: "Soup of the Day", price: "$7", desc: "Chef's freshly prepared seasonal soup." },
    ],
    mains: [
      { name: "Grilled Ribeye Steak", price: "$28", desc: "Premium ribeye steak served with garlic butter and vegetables." },
      { name: "Pan-Seared Salmon", price: "$24", desc: "Fresh salmon fillet with lemon herb sauce." },
      { name: "Chicken Alfredo", price: "$18", desc: "Creamy Alfredo pasta topped with grilled chicken." },
    ],
    desserts: [
      { name: "Chocolate Lava Cake", price: "$9", desc: "Warm chocolate cake with a molten center." },
      { name: "Cheesecake", price: "$8", desc: "Classic New York cheesecake with berry compote." },
      { name: "Ice Cream Trio", price: "$7", desc: "Selection of three premium ice cream flavors." },
    ],
    drinks: [
      { name: "Fresh Juice", price: "$5", desc: "Orange, mango, pineapple, or mixed fruit." },
      { name: "Signature Mocktail", price: "$7", desc: "Refreshing handcrafted non-alcoholic beverage." },
      { name: "Coffee", price: "$4", desc: "Freshly brewed premium coffee." },
    ],
  };

  const MenuSection = ({ title, items }) => (
    <section className="menu-section">
      <h2>{title}</h2>

      <div className="menu-items">
        {items.map((item, index) => (
          <div className="menu-card" key={index}>
            <div className="menu-header">
              <h3>{item.name}</h3>
              <span>{item.price}</span>
            </div>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="menu-overlay">
          <h1>Our Menu</h1>
          <p>
            Discover a carefully curated selection of culinary masterpieces.
          </p>
        </div>
      </section>

      <div className="menu-container">
        <MenuSection title="Starters" items={menuData.starters} />
        <MenuSection title="Main Courses" items={menuData.mains} />
        <MenuSection title="Desserts" items={menuData.desserts} />
        <MenuSection title="Beverages" items={menuData.drinks} />
      </div>
    </div>
  );
}

export default Menu;