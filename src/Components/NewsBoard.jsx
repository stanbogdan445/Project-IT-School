import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "dd90d3345760a1e80ce1032b863bf63e";
    const fetchNews = async (cat) => {
      try {
        const url = `https://gnews.io/api/v4/top-headlines?category=${cat}&lang=en&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else if (cat !== "general") {
          // fallback la categoria 'general'
          fetchNews("general");
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews(category);
  }, [category]);

  if (loading) {
    return <p className="text-center mt-5">Loading news...</p>;
  }

  return (
    <div>
      <h2 className="text-center">
        Breaking <span className="badge bg-danger">News</span>
      </h2>

      {articles.length === 0 ? (
        <p className="text-center mt-5">No news available for this category.</p>
      ) : (
        articles.map((news, index) => <NewsItem key={index} news={news} />)
      )}
    </div>
  );
};

export default NewsBoard;
