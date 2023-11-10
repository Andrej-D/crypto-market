import React from "react";

const FavoriteButton = ({
  isLoggedIn,
  handleToggleFavorite,
  favoriteSymbols,
  symbol,
}) => {
  return (
    <div>
      {isLoggedIn && (
        <button
          className="btn btn-primary py-3 w-20 mb-2"
          onClick={handleToggleFavorite}
        >
          {favoriteSymbols.includes(symbol)
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>
      )}
    </div>
  );
};

export default FavoriteButton;
