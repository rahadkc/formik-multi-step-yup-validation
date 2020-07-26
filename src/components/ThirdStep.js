import React from 'react'
import { TextInput } from '../form/TextInput'

export const ThirdStep = () => {
  return (
    <>
      <TextInput
        label={"Payment Method"}
        type={"text"}
        name={"payment"}
        placeholder={"Payment method..."}
      />
      <TextInput
        label={"agreement"}
        type={"text"}
        name={"agreement"}
        placeholder={"agrement..."}
      /> 
    </>
  )
}

export default ThirdStep