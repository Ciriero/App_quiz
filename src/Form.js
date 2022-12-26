import React from 'react'
import { useGlobalContext } from './context'

const Form = () => {
    const {values, handleChange, handleSubmit, error} = useGlobalContext()
  return (
    <div>Form</div>
  )
}

export default Form