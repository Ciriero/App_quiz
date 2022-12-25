import { createContext, useContext } from "react";

const API_ENDPOINT = "https://opentdb.com/api.php?";

const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"hi there"}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
