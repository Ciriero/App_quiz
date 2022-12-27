import React from "react";
import { useGlobalContext } from "./context";
import Form from "./Form";
import Loading from "./Loading";
import Modal from "./Modal";

const Main = () => {
  const { waiting, isLoading, questions, index, correct, nextQuestions, checkAnswer } = useGlobalContext();
  if (waiting) {
    return <Form />;
  }
  if (isLoading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers];
  const randomIndex = Math.floor(Math.random() * 4)
  answers.splice(randomIndex, 0, correct_answer)
  
  return (
    <main>
        <Modal />
      <section className="quiz">
        <p className="correct-answer">
          correct answers: {correct} / {index}
        </p>
        <div className="container">
          <h2 
          dangerouslySetInnerHTML={{__html: question}}
          />
          <div>
            {answers.map((answer, index) => (
              <button 
              key={index} 
              className="answer-btn" 
              dangerouslySetInnerHTML={{__html: answer}}
              onClick={() => checkAnswer(correct_answer === answer)}
              />
            ))}
          </div>
        </div>
        <button className="next" onClick={nextQuestions}>Next</button>
      </section>
    </main>
  );
};

export default Main;
