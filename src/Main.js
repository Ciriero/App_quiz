import React from "react";
import { useGlobalContext } from "./context";
import Form from "./Form";
import Loading from "./Loading";

const Main = () => {
  const { waiting, isLoading, questions, index, correct, nextQuestions } = useGlobalContext();
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
          <h2 
          dangerouslySetInnerHTML={{__html: question}}
          />
          <div>
            {answers.map((answer, index) => (
              <button 
              key={index} 
              className="answer-btn" 
              dangerouslySetInnerHTML={{__html: answer}}
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
