import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon

export default function VideoCard({ video }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="video-card">
      <div className="video-container">
        <iframe
          src={video.url}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video"
        ></iframe>
        
        {/* Heart Button */}
        <button className={`heart-button ${liked ? "liked" : ""}`} onClick={handleLike}>
          <FaHeart />
          <span>{likes}</span>
        </button>
      </div>


      <div className="video-info">
        <h3 className="title">{video.title}</h3>
        <p className="channel">{video.channel}</p>
      </div>
    </div>
  );
}
