import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurant.js";

import { createBrowserRouter } from "react-router-dom";




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
            "https://disco.deliveryhero.io/listing/api/v1/pandora/vendors?country=op&city_id=393&language_id=4&sort=&offset=48&limit=48&vertical=restaurants",
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Accept-Encoding': 'gzip, deflate, br, zstd',
                    'Accept-Language': 'en-GB,en;q=0.9,sv-SE;q=0.8,sv;q=0.7,en-US;q=0.6,hi;q=0.5,mr;q=0.4',
                    'Cache-Control': 'no-cache',
                    'Dps-Session-Id': 'YOUR_DPS_SESSION_ID', // Replace with the actual session ID
                    'Origin': 'https://www.foodora.se',
                    'Perseus-Client-Id': 'YOUR_PERSEUS_CLIENT_ID', // Replace with the actual client ID
                    'Perseus-Session-Id': 'YOUR_PERSEUS_SESSION_ID', // Replace with the actual session ID
                    'Pragma': 'no-cache',
                    'Referer': 'https://www.foodora.se/',
                    'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                    'Sec-Ch-Ua-Mobile': '?0',
                    'Sec-Ch-Ua-Platform': '"Windows"',
                    'Sec-Fetch-Dest': 'empty',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Site': 'cross-site',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
                    'User-Logged-In': 'false',
                    'X-Disco-Client-Id': 'web',
                    'X-Fp-Api-Key': 'volo'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}, message: ${await response.text()}`);
        }

        const json = await response.json();
        const data = json?.data?.items || [];
        console.log("API data:", data);
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
      restaurant.name.toLowerCase().includes(searchtext.toLowerCase())
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
      {/* {console.log("filtered:",filteredData)} */}
      <div className="res-container">
        {filteredData.map((restaurant) => (
          <div className="res-card">
            <RestaurantCard  restaurant = {restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
