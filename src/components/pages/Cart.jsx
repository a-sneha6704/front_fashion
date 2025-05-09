import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const navigate = useNavigate();

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

  const handleIncrease = (title) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.title === title ? { ...item, qty: item.qty + 1 } : item
      );
      updateCookie(updatedItems);
      return updatedItems;
    });
  };

  const handleDecrease = (title) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.title === title && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      updateCookie(updatedItems);
      return updatedItems;
    });
  };

  const handleRemove = (title) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.title !== title);
      updateCookie(updatedItems);
      return updatedItems;
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.qty * parseFloat(item.price),
      0
    );
  };

  useEffect(() => {
    const data = getCookie("cartData");
    setCartItems(data || []);
  }, []);

  useEffect(() => {
    setGrandTotal(calculateTotal());
  }, [cartItems]);

  const handleOrderNow = () => {
    navigate("/orderform", { state: { grandTotal } });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">~~~ YOUR CART ~~~</h1>
      {cartItems.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Id</th> 
              <th>Item</th>
              <th>Qty</th>
              <th>Per Unit Price</th>
              <th>Total</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td> 
                <td>{item.title}</td>
                <td>
                  <div className="cart-qty-control">
                    <button className="decrease-btn" onClick={() => handleDecrease(item.title)}>
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button className="increase-btn" onClick={() => handleIncrease(item.title)}>
                      +
                    </button>
                  </div>
                </td>
                <td>₹{item.price}</td>
                <td>₹{item.qty * parseFloat(item.price)}</td>
                <td>
                  <button className="remove-btn" onClick={() => handleRemove(item.title)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className="total-label">Total :</td>
              <td colSpan="2" className="total-amount">₹{grandTotal}</td>
            </tr>
            <tr>
              <td colSpan="7" className="order-now-container">
                <button className="order-now-btn" onClick={handleOrderNow}>
                  Order Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="add-item-btn">
            <a href="/shop/seasonal-collections" className="add-item-link">
              ADD ITEM
            </a>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
