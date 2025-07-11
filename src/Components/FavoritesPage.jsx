import React, { useContext } from "react";
import { FavoriteContext } from "../FavoriteContext";
import NewsItem from "./NewsItem";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext);

  return (
    <div className="container my-4" id="favorites-page">
      <h2 className="text-center mb-4">
         Favorite news <span className="badge bg-primary">{favorites.length}</span>
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center">You haven’t added any favorites yet.</p>
      ) : (
        <div className="row">
          {favorites.map((news) => (
            <div className="col-md-4 mb-4" key={news.url}>
              <NewsItem news={news} isFavoritePage={true} />
              <button
                className="news-card-button mt-2"
                onClick={() => removeFromFavorites(news.url)}
              >
                ❌ Remove from favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
