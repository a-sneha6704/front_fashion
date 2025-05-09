import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "../common/Footer";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import  AboutUs  from "./AboutUs";
import  Contact  from "./Contact";
import { Shop } from "./Shop";
import { StyleTips } from "./StyleTips";
import { BlogDetail } from "../data/blogs/BlogDetail";
import LifeStyle from "./LifeStyle";
import { Signup } from "./Signup"; 
import { Login } from "./Login";
import SeasonalCollections from "./SeasonalCollections";
import BestSellers from "./BestSellers";
import LimitedEdition from "./LimitedEdition"; 
import Cart from "./Cart";
import UserProfile from "./UserProfile";
import VideoCard from "./VideoCard";
import OutfitStyler from "./OutfitStyler";
import StylerButton from "./StylerButton";
import {StylerCard} from "./StylerCard";
import  OrderForm  from "./OrderForm";
import TrackOrder from "./TrackOrder";
import { Photos } from "./Photos";
import { Content } from "./Content";

export const Pages = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/styleTips" element={<StyleTips />} />
        <Route path="/blog/:title" element={<BlogDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/lifeStyle" element={<LifeStyle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/login" element={<Login />} /> 
        <Route path="/shop/seasonal-collections" element={<SeasonalCollections />} />
        <Route path="/shop/best-sellers" element={<BestSellers />} />
        <Route path="/shop/limited-edition" element={<LimitedEdition />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/videoCard" element={<VideoCard />} />
        <Route path="/outfitstyler" element={<OutfitStyler />} />
        <Route path="/stylerbutton" element={<StylerButton />} />
        <Route path="/stylercard" element={<StylerCard />} /> 
        <Route path="/orderform" element={<OrderForm />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/content" element={<Content />} />

      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};
