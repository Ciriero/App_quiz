import React from 'react'
import { useGlobalContext } from './context'
import Form from './Form';
import Loading from './Loading';

const Main = () => {
    const {waiting, isLoading, questions, index, correct} = useGlobalContext();
    if(waiting){
        return <Form />
    }
    if(isLoading){
        return <Loading />
    }
    const {question, incorrect_answers, correct_answer} = (questions[index])
    const answers = [...incorrect_answers, correct_answer] 
  return (
    <main>
        <section>
            <p>
                correct answers: {correct} / {index}
            </p>
        </section>
    </main>
  )
}

export default Main