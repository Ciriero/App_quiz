import axios from "axios";
import { createContext, useContext, useState } from "react";

const API_ENDPOINT = "https://opentdb.com/api.php?";

const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false)

  const getData = async (url) => {
    setWaiting(false);
    setIsLoading(true);
    const {data} = await axios(url).catch(err => console.log(err));
    if(data){
        const datas = data.results
        if(datas.length > 0){
            setQuestions(datas);
            setWaiting(false)
            setIsLoading(false)
        } else {
            setWaiting(true);
        }
    }
  }

  return (
    <AppContext.Provider
      value={{ waiting, isLoading, questions, index, correct }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
