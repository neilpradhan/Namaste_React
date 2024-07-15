import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurant.js";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
const [filteredData, setFilteredData] = useState([]);
  const [searchtext, setSearchtext] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const data = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(data);
      setFilteredData(data);
      console.log("Fetched and set restaurants");
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const filterHighRated = () => {
    const highRatedData  = restaurants.filter((res) => res.info.avgRating > 4.0);
    setFilteredData(highRatedData );
  };


  const search = () => {
    const SearchData = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilteredData(SearchData);
    
    console.log(SearchData);
  };



  

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className = "search-box" value = {searchtext} onChange={(e) => {setSearchtext(e.target.value)}}/>
          <button type="button" onClick={search}>Search</button>
        
        <button onClick={filterHighRated}>
          Filter High Rated Restaurants
        </button>
        </div>
      </div>
      <div className="res-container">
        {filteredData.map((restaurant) => (
          <div key={restaurant.info.id} className="res-card">
            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
