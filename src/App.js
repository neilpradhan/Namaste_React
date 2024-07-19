import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Header from "./components/Header.js"

import RestaurantCard from "./components/Restaurant.js"
import Body from "./components/Body.js"
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/Restaurantmenu.js";
import { useState } from "react";

// Header
// - Logo
// - Nav Items
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
  // {console.log("use state log",useState())}
  return (
    <div className="app">
      <div>
        <Header />
        <Body />

      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>

  },
  {

    path: "/about",
    element: <About/>
  },

  {
    path:"/contact",
    element: <Contact/>
  },

  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />,
  }

]);




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Applayout></Applayout>)

root.render(
  <RouterProvider router={router} />
);

