import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const API_ENDPOINT = "https://opentdb.com/api.php?";

//just to check functionality
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy"
  })

  const getData = async (url) => {
    setWaiting(false);
    setIsLoading(true);
    const { data } = await axios(url).catch((err) => console.log(err));
    if (data) {
      const datas = data.results;
      console.log(datas);
      if (datas.length > 0) {
        setQuestions(datas);
        setWaiting(false);
        setIsLoading(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  //we will delete this useeffect later; only need it to check functionality
//   useEffect(() => {
//     getData(tempUrl);
//   }, []);

//replace the useEffect by the values ​​of the user:

const handleChange = (e) => {}

const handleSubmit = (e) => {
    e.preventDefault()
}

  const nextQuestions = () => {
    setIndex((prevValue) => {
      const index = prevValue + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((prevValue) => prevValue + 1);
    }
    nextQuestions();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setWaiting(true)
    setCorrect(0)
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        isLoading,
        questions,
        index,
        correct,
        nextQuestions,
        checkAnswer,
        closeModal,
        isModalOpen,
        values,
        handleChange,
        handleSubmit
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
