import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js"

import RestaurantCard from "./components/Restaurant.js"
import Body from "./components/Body.js"

// Header
// - Logo
// - Nav Items
// Talk is Cheap, Show me the Code! (Namaste-React) 3
// Body
// - Search
// - Restaurant Container
// - Restaurant Card
// - Dish Name
// - Image
// - Restaurant Name
// - Rating
// - Cuisines
// - Time to Deliver
// Footer
// - Copyright
// - Links
// - Address
// - Contact












const Applayout = () => {
  return (
    <div className="app">
      <div>
        <Header />
        <Body />

      </div>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout></Applayout>)

