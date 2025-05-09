import React from "react";
import VideoCard from "./VideoCard"; // Import VideoCard component 

const videos = [
  { id: 1, url: "https://www.youtube.com/embed/dVZnEoxWv9M?rel=0", title: "", channel: "@VIVACIOUSHONEY" },
  { id: 2, url: "https://www.youtube.com/embed/Obv4yhwOBoY?rel=0", title: "", channel: "@LinaNoory" },
  { id: 3, url: "https://www.youtube.com/embed/JuwJAqlM-nc?rel=0", title: "", channel: "@FashioniseSumii_crv" },
  { id: 4, url: "https://www.youtube.com/embed/_eP7YCTMZk4?rel=0", title: "", channel: "@evochek" },
  { id: 5, url: "https://www.youtube.com/embed/pZ_iYsSA2Lw?rel=0", title: "", channel: "@bobrownn" },
  { id: 6, url: "https://www.youtube.com/embed/jfFSTYnGVIs?rel=0", title: "", channel: "@bobrownn" },
];

export default function LifeStyle() {
  return (
    <div className="abc">
      <div className="video-title">
        <h1>~~~ Trendy LifeStyle Rewind ~~~ </h1>
        <h3>Discover the latest fashion trends and styling hacks in just seconds!!💃✨ </h3>
        <h4>Stay ahead in the world of fashion and lifestyle with our must-watch shorts.</h4>
        
      </div>

      <div className="lifestyle-container">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
