import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`https://op.fd-api.com/api/v5/vendors/${encodeURIComponent(resId)}?include=menus,bundles,multiple_discounts,payment_types&language_id=4&opening_type=delivery&basket_currency=SEK&latitude=59.33405&longitude=18.03589`,
        {
   
        method : 'GET',
        headers: {
    //         // ':authority': 'op.fd-api.com',
    //         // ':method': 'GET',
    //         // ':path': `/api/v5/vendors/${resId}?include=menus,bundles,multiple_discounts,payment_types&language_id=4&opening_type=delivery&basket_currency=SEK&latitude=59.33405&longitude=18.03589`,
    //         // ':scheme': 'https',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-GB,en;q=0.9,sv-SE;q=0.8,sv;q=0.7,en-US;q=0.6,hi;q=0.5,mr;q=0.4',
            'Cache-Control': 'no-cache',
            'Origin': 'http://localhost:1234',
            'Pragma': 'no-cache',
            'Priority': 'u=1, i',
            'Referer': 'http://localhost:1234/',
            'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': navigator.userAgent
          }
        }
         
    );


      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log('API Response:', json); // Log the response to debug
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu data", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!resInfo) {
    return <div>No data available</div>;
  }

  return (
    <div className="menu">
        <h1>vendor_legal_information.legal_name</h1>
      <h1>{resInfo.address}</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo.menus && resInfo.menus[0].menu_categories.map((menu, index) => (
          <li key={index}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
