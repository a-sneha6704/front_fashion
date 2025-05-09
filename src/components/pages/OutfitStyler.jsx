import React, { useState } from "react";
import { motion } from "framer-motion";
import StylerButton from "../pages/StylerButton";
import { StylerCard, CardContent } from "../pages/StylerCard"; 

const topwearOptions = ["T-shirt", "Shirt", "Hoodie", "Sweat-Shirt", "Blazer"];
const bottomwearOptions = ["Jeans", "Trousers", "Shorts", "Joggers", "Skirt"];

const outfitSuggestions = {
  "T-shirt_Jeans": { text: "A laid-back look blending earthy tones with timeless denim flair.", image: "/images/tshirt_jeans.jpg" },
  "T-shirt_Shorts": { text: "Bold in black and ripped denim shorts!!", image: "/images/T-shirt_Shorts.jpg" }, 
  "T-shirt_Joggers": { text: "Comfy meets chic: Joggers redefined with a stylish edge!!", image: "/images/Tshirt_joggerse.jpg" }, 
  "T-shirt_Trousers": { text: " Tailored trousers with a street-style twist!!", image: "/images/tshirt_trouser.jpg" }, 
  "T-shirt_Skirt": { text: "Chic and classy: A flowy pleated skirt for effortless style!!", image: "/images/tshirt_skirt.jpg" }, 

  "Shirt_Trousers": { text: "Chic sleeveless shirt paired with stylish wide-leg trousers!!", image: "/images/shirt_trouser.jpg" },
  "Shirt_Shorts": { text: "Trendy printed shirt with stylish denim shorts!!", image: "/images/shirt_shorts.jpg" },
  "Shirt_Skirt": { text: "Elegant pinstripe skirt paired with a chic pastel shirt!!", image: "/images/Shirt_Skirt.jpg" },
  "Shirt_Joggers": { text: "Chic striped shirt paired with stylish black joggers!! ", image: "/images/shirt_joggers.jpg" },
  "Shirt_Jeans": { text: "Bold pink shirt styled effortlessly with classic denim jeans!!", image: "/images/shirt_jeans.jpg" },

  "Hoodie_Joggers": { text: "Relaxed-fit hoodie paired with stylish joggers for a cozy-chic look!!", image: "/images/hoodie_joggers.jpg" },
  "Hoodie_Jeans": { text: "Oversized hoodie paired with trendy wide-leg jeans!!", image: "/images/hoodie_jeans.jpg" },
  "Hoodie_Shorts": { text: "Sporty cropped hoodie paired with cozy high-waist shorts!!", image: "/images/hoodie_shorts.jpg" },
  "Hoodie_Skirt": { text: "Edgy oversized hoodie styled with a chic pleated skirt!!", image: "/images/hoodie_skirt.jpg" },
  "Hoodie_Trousers": { text: "Chic oversized hoodie paired with comfy jogger trousers!!", image: "/images/hoodie_trouser.jpg" },

  "Sweat-Shirt_Skirt": { text: "Trendy preppy sweater vest with pleated skirt for a chic, stylish look!!", image: "/images/sweater_skirt.jpg" },
  "Sweat-Shirt_Shorts": { text: "Chic oversized sweatshirt paired with comfy shorts for a relaxed yet stylish vibe!!", image: "/images/sweat-shirt_short.jpg" },
  "Sweat-Shirt_Joggers": { text: "Trendy cropped sweatshirt and relaxed joggers for a chic athleisure look!!", image: "/images/sweat-shirt_joggers.jpg" },
  "Sweat-Shirt_Trousers": { text: "Vibrant oversized hoodie with matching joggers for a bold streetwear look!!", image: "/images/sweat-shirt_trouser.webp" },
  "Sweat-Shirt_Jeans": { text: "Bold cropped sweatshirt with statement sleeves paired with classic wide-leg jeans!!", image: "/images/sweat-shirt_jeans.jpg" },

  "Blazer_Jeans": { text: "Chic oversized blazer paired with classic high-waisted jeans for a trendy look!!", image: "/images/blazer_jeans.jpg" },
  "Blazer_Joggers": { text: "Edgy black blazer with comfy grey joggers for a chic athleisure vibe!!", image: "/images/blazer_joggers.jpg" },
  "Blazer_Trousers": { text: "Elegant tailored blazer with matching trousers for a sleek and professional look!!", image: "/images/blazer_trouser.webp" },
  "Blazer_Shorts": { text: "Vibrant pink blazer with distressed denim shorts for a bold and trendy statement!!", image: "/images/blazer_shorts.jpg" },
  "Blazer_Skirt": { text: "Bold cropped blazer with a chic pleated skirt for a sleek statement look!!", image: "/images/blazer_skirt.jpg" }
};

const OutfitStyler = () => {
  const [selectedTopwear, setSelectedTopwear] = useState("");
  const [selectedBottomwear, setSelectedBottomwear] = useState("");
  const [styledOutfit, setStyledOutfit] = useState(null);
  const [showCrackers, setShowCrackers] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleStyle = () => {
    const key = `${selectedTopwear}_${selectedBottomwear}`;
    setStyledOutfit(outfitSuggestions[key] || { text: "No exact match, try another combination!", image: "" });
    
    setShowCrackers(true); // Show crackers effect
    setTimeout(() => {
      setShowCrackers(false);
      setShowImage(true); // Show image after animation
    }, 1000);
  };

  return (
    <div className="outfit-container">
      <h2 className="title-style">✨ Style Your Outfit ✨</h2>

      <div className="select-group" style={{ width: "500px", padding: "5px", fontSize: "14px" }}>
        <label>Select Topwear:</label>
        <select onChange={(e) => setSelectedTopwear(e.target.value)}>
          <option value="">-- Choose --</option>
          {topwearOptions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="select-group" style={{ width: "500px", padding: "5px", fontSize: "14px" }}>
        <label>Select Bottomwear:</label>
        <select onChange={(e) => setSelectedBottomwear(e.target.value)}>
          <option value="">-- Choose --</option>
          {bottomwearOptions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <StylerButton onClick={handleStyle} className="style-button">Style</StylerButton>

      {showCrackers && (
        <motion.div 
          className="cracker-animation"
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 0, scale: 3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          🎆🎇💥🔥
        </motion.div>
      )}

      {showImage && styledOutfit && (
        <StylerCard className="outfit-card">
          <CardContent className="card-content">
            <p className="outfit-text">{styledOutfit.text}</p>
            {styledOutfit.image && (
              <motion.div 
                className="image-container"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={styledOutfit.image} alt="Styled Outfit" className="styled-image" />
              </motion.div>
            )}
          </CardContent>
        </StylerCard>
      )}
    </div>
  );
};

export default OutfitStyler;
