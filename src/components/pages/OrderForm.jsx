import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderForm() {
  const location = useLocation();
  const grandTotal = location.state?.grandTotal || 0;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex =  /^\d{10}$/;
 
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";
 
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required.";
    else if (!contactRegex.test(formData.contactNumber)) newErrors.contactNumber = "Invalid contact number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error as user types
  };

  const handlePayment = async () => {
    try {
      const res = await fetch("http://localhost:4001/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: grandTotal }),
      });

      const order = await res.json();
      if (!order.id) {
        alert("Order creation failed!");
        return;
      }

      const options = {
        key: "rzp_test_K5oH0ht3uj6cTB",
        amount: order.amount,
        currency: "INR",
        name: "Fashion & Lifestyle",
        description: "Order Payment",
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful!");
          navigate("/trackorder");
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.contactNumber,
        },
        theme: { color: "#a378fa" },
      };

      if (window.Razorpay) {
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
      } else {
        alert("Payment gateway failed to load. Please refresh the page.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed! Check console.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handlePayment();
    }
  };

  return (
    <div className="order-form">
      <h2>Complete Your Order</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}  required />
       

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}   />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange}  required />
        

        <label>Contact Number:</label>
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange}   />
        {errors.contactNumber && <p style={{ color: "red" }}>{errors.contactNumber}</p>}

        <p>Total Amount: ₹{grandTotal}</p>

        <button type="submit">Proceed to Pay</button>
      </form>
    </div>
  );
}

export default OrderForm;
