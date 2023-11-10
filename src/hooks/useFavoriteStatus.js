import { useLocalStorage } from "usehooks-ts";
import { useMemoizedFn } from "ahooks";

export const useFavoriteStatus = () => {
  const [favoriteSymbols, setFavoriteSymbols] = useLocalStorage(
    "favoriteSymbols",
    []
  );

  const toggleFavoriteSymbol = useMemoizedFn((symbol) => {
    console.log(favoriteSymbols);
    setFavoriteSymbols((prevSymbols) => {
      console.log(prevSymbols);
      return prevSymbols.includes(symbol)
        ? prevSymbols.filter((item) => item !== symbol)
        : [...prevSymbols, symbol];
    });
  });

  return { favoriteSymbols, toggleFavoriteSymbol };
};
