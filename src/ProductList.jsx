import React, { useState } from "react";

function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, category: "Flowering", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Cactus", price: 8, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Fern", price: 12, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Rose Plant", price: 18, category: "Flowering", image: "https://via.placeholder.com/100" }
  ];

  const addToCart = (plant) => {
    setCartCount(cartCount + 1);
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = ["Succulents", "Indoor", "Flowering"];

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>🌿 Paradise Nursery</h2>
        <p>
          Home | Plants | Cart 🛒 ({cartCount})
        </p>
      </nav>

      {/* Product Listing */}
      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          {plants
            .filter((plant) => plant.category === cat)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() => addToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
