import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../data/blogs/about_us1.jpg'; // Replace with the correct path to your image

const AboutUs = () => {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate('/shop/seasonal-collections');
    };

    return (
        <div className="about-container">
            <div className="about-content">
                {/* Text Section */}
                <div className="about-text">
                    <h1 className="about-title">ABOUT US</h1>
                    <p className="about-description">
                        Welcome to Our Fashion and LifeStyle, where fashion meets lifestyle in its most authentic and inspiring form.
                        Our journey began with a simple idea: to celebrate individuality and empower self-expression through trendsetting
                        designs and curated lifestyle essentials. From the latest runway-inspired styles to everyday chic, we believe in making
                        every moment a statement. Our team works tirelessly to bring you not just clothing and accessories but a reflection of
                        the vibrant, diverse, and dynamic lives our customers lead.
                    </p>
                    <h2 className="about-subtitle">Versatile Styles</h2>
                    <p className="about-description">
                        "Fashion is about endless possibilities. We offer a range of styles that cater to every occasion, mood, 
                        and personality, ensuring you find the perfect look every time."
                    </p>
                    <h2 className="about-subtitle">Custom Creations</h2>
                    <p className="about-description">
                        "From personalized styling advice to custom-designed outfits, we cater to your unique needs. 
                        Let us help you create a wardrobe that tells your story."

                    </p>
                    <button className="order-now-button" onClick={handleOrderNowClick}>
                        Order Now
                    </button>
                </div>

                {/* Image Section */}
                <div className="about-image-container">
                    <img src={image} alt="Delicious Food" className="about-image" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
