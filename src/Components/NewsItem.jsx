import style from "../style.css";
import image from "../assets/Breaking-News.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="news-card">
      <img src={src ? src : image} alt="..." />
      <div className="news-card-body">
        <h5 className="news-card-title">{title.slice(0, 50)}</h5>
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
      </div>
    </div>
  );
};

export default NewsItem;
