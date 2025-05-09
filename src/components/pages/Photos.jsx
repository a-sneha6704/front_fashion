import React from "react";


export const Photos = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Fashion Trends & Styles</h2>
        <p className="gallery-description">
        Fashion is more than just clothing—it’s a way of expressing individuality, creativity, and culture. From trendy streetwear to timeless classics, fashion evolves with every season, reflecting personal style and global influences.
        </p>
        <div className="gallery-images">
          <img src="/images/blazer_skirt.jpg" alt="Fashion 1" className="gallery-image" />
          <img src="/images/shirt_trouser.jpg" alt="Fashion 2" className="gallery-image" /> 
          <img src="/images/shirt_shorts.jpg" alt="Fashion 3" className="gallery-image" />
          <img src="/images/shirt_skirt.jpg" alt="Fashion 4" className="gallery-image" />
        </div>
      </div>
    </section>
  );
};