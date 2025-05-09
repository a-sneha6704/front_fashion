import React from "react";

export const Content = () => {
  return (
    <>
      <section className="fashionBlogs">
        <div className="video-container-home">
          <video controls autoPlay loop muted className="jewelry-video">
            <source src="https://www.shutterstock.com/shutterstock/videos/1085493116/preview/stock-footage-beautiful-blonde-in-a-black-jacket-and-luxurious-jewelry-around-her-neck-beauty-portrait-and.webm" />
            Your browser does not support the video tag.
          </video>

          <video controls autoPlay loop muted className="jewelry-video">
            <source src="https://www.shutterstock.com/shutterstock/videos/1091446817/preview/stock-footage-cool-young-woman-dancing-with-mobile-urban-futuristic-background-model-posing-in-k-uhd.webm"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};