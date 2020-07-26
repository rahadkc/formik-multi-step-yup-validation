import React from 'react'
import { TextInput } from '../form/TextInput'

export const FirstStep = () => {
  return (
    <>
      <TextInput
        label={"Email"}
        type={"text"}
        name={"email"}
        placeholder={"Email..."}
      />
      <TextInput
        label={"Password"}
        type={"password"}
        name={"password"}
        placeholder={"Password..."}
      /> 
    </>
  )
}

export default FirstStep