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
  return (
    <div>Main</div>
  )
}

export default Main