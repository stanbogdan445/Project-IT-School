import { useContext } from "react";
import { FavoriteContext } from "../FavoriteContext";
import image from "../assets/Breaking-News.jpg";
import style from "../style.css"; 

const NewsItem = ({ news, isFavoritePage = false }) => {
  const { addToFavorites } = useContext(FavoriteContext);

  const { title, description, urlToImage, url } = news;

  return (
    <div className="news-card">
      <img src={urlToImage ? urlToImage : image} alt="..." />
      <div className="news-card-body">
        <h5 className="news-card-title">{title ? title.slice(0, 50) : "No title"}</h5>
        <p className="news-card-text">
          {description
            ? description.slice(0, 90)
            : "The SB News app brings you the latest news from your country and around the world, updated in real time."}
        </p>
        <a
          href={url}
          className="news-card-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
        {!isFavoritePage && (
          <button
            className="news-card-button"
            style={{ marginLeft: "10px" }}
            onClick={() => addToFavorites(news)}
          >
            ❤️ Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
