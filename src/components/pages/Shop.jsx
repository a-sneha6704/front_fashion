import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { shop } from "../data/dummydata";
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const allCategory = ["all", ...new Set(shop.map((item) => item.category))];

export const Shop = () => {
  const [list, setLists] = useState(shop);
  const [category, setCategory] = useState(allCategory);

  const filterItems = (category) => {
    if (category === "all") {
      setLists(shop);
      return;
    }
    const newItems = shop.filter((item) => item.category === category);
    setLists(newItems);
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Shop" />
          <div className="catButton">
            {category.map((category) => (
              <button
                key={category}
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item) => (
              <div className="box" key={item.title} data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt={item.title} />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                  {/* Add navigation links to subpages */}
                  <Link to="/shop/seasonal-collections">
                    <button className="primaryBtn">View Details</button>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
