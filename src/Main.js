import React from "react";
import { useGlobalContext } from "./context";
import Form from "./Form";
import Loading from "./Loading";

const Main = () => {
  const { waiting, isLoading, questions, index, correct } = useGlobalContext();
  if (waiting) {
    return <Form />;
  }
  if (isLoading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];
  return (
    <main>
      <section className="quiz">
        <p className="correct-answer">
          correct answers: {correct} / {index}
        </p>
        <div className="container">
          <h2>{question}</h2>
          <div>
            {answers.map((answer, index) => (
              <button key={index} className="answer-btn">
                {answer}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
