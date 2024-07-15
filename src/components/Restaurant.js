import { CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = resData;

  const imageUrl = cloudinaryImageId ? `${CDN_URL}${cloudinaryImageId}` : "https://via.placeholder.com/150";

  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "blue" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
