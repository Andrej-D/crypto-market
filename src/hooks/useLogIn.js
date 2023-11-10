import { useLocalStorage } from "usehooks-ts";
import { useMemoizedFn } from "ahooks";

export const useLogIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);

  const onChangeLoggedIn = useMemoizedFn((newValue) => {
    setIsLoggedIn(newValue);
  });

  return { isLoggedIn, onChangeLoggedIn };
};
