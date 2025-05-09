import React, { useState } from "react";

const Card = ({ image, title, price, description }) => {
  console.log(image);

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return JSON.parse(decodeURIComponent(cookieValue));
      }
    }
    return [];
  };

  const updateCookie = (updatedItems) => {
    document.cookie = `cartData=${encodeURIComponent(
      JSON.stringify(updatedItems)
    )}; max-age=3600; path=/`;
  };

  const handleAddToCart = () => {
    const cartItems = getCookie("cartData") || [];

    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.title === title);

    if (existingItem) {
      existingItem.qty += quantity;
    } else {
      cartItems.push({
        title,
        image,
        price,
        qty: quantity,
      });
    }

    updateCookie(cartItems);
    alert(`${title} added to cart!`); // Optional confirmation message
  };

  return (
    <div className="card-container">
      <div className="card">
        {/* <img src={`http://localhost:4001/images/${image}`} alt={title} className="card-image" onError={(e) => e.target.src = "/placeholder.png"}/> */}
        <img src={`http://localhost:4001/images/${image}`} alt="" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">₹{price}/-</p>
          <p className="card-description">{description}</p>
          <div className="card-quantity">
            <button className="quantity-button" onClick={handleDecrement}>
              -
            </button>
            {/* <span className="quantity">{quantity}</span> */}
            

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val) && val >= 1) setQuantity(val);
              }}
              className="quantity-input"
            />

            <button className="quantity-button" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button className="add-button" onClick={handleAddToCart}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
