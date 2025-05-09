import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const steps = ["Shipping", "Out for Delivery", "Delivered"];

function TrackOrder() {
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 2000);  

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>

      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index === stepIndex ? "active" : ""}`}>
            {step}
          </div>
        ))}
      </div>

      {/* Moving Scooter */}
      <div className="scooter-container">
        <img
          src="/images/Scootor.jpg"
          alt="Delivery Scooter"
          className="scooter"
          style={{ left: `${(stepIndex / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {stepIndex === steps.length - 1 && (
        <div className="success-message">
          🎉 Your order has been delivered! Enjoy your purchase.
          <button onClick={() => navigate("/")} className="back-home">Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default TrackOrder;
