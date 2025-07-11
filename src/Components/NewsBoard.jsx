import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const API_KEY = "e5ca2818288d4ba38ba6c73f3e9300b0";
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Breaking <span className="badge bg-danger">News</span>
      </h2>

      {articles.length === 0 ? (
        <p className="text-center mt-5">No news available for this category.</p>
      ) : (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            news={news}  
          />
        ))
      )}
    </div>
  );
};

export default NewsBoard;
