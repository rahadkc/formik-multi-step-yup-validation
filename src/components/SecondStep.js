import { Stack } from '@chakra-ui/core'
import React from 'react'
import { TextInput } from '../form/TextInput'

export const SecondStep = () => {
  return (
    <Stack spacing={4}>
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
    </Stack>
  )
}

export default SecondStep