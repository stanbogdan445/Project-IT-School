import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (newsItem) => {
    if (!favorites.find((item) => item.url === newsItem.url)) {
      setFavorites([...favorites, newsItem]);
    }
  };

  const removeFromFavorites = (url) => {
    setFavorites(favorites.filter((item) => item.url !== url));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
