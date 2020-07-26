import React from 'react'
import { TextInput } from '../form/TextInput'

export const SecondStep = () => {
  return (
    <>
      <TextInput
        label={"User Name"}
        type={"text"}
        name={"username"}
        placeholder={"username..."}
      />
      <TextInput
        label={"Country"}
        type={"text"}
        name={"country"}
        placeholder={"Bangladesh..."}
      />
      <TextInput
        label={"City"}
        type={"text"}
        name={"city"}
        placeholder={"Dubai..."}
      />  
    </>
  )
}

export default SecondStep