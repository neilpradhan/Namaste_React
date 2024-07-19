
import { useNavigate } from 'react-router-dom';

import React from 'react';

const RestaurantCard = ({ restaurant }) => {

    const navigate = useNavigate();

  // console.log("inside the card:",restaurant);
    if (!restaurant || !restaurant.chain ||  !restaurant.city) {
        return <div className="restaurant-card">Invalid restaurant data</div>;
    }

    const { chain, city, hero_listing_image, redirection_url} = restaurant;

    

    const handleClick = () => {
        const urlSegments = redirection_url.split("/");
        const restaurantId = urlSegments[urlSegments.length - 2];
        navigate(`/restaurant/${restaurantId}`);
      };



    return (
        <div className="restaurant-card" onClick={handleClick}>

            <img src = {hero_listing_image} alt = {chain.name}/>
            <h2>{chain.name}</h2>
            <p><strong>Area:</strong> {city.name}</p>
        </div>
    );
};

export default RestaurantCard;

