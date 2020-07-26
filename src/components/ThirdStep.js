import { Stack } from '@chakra-ui/core'
import React from 'react'
import { TextInput } from '../form/TextInput'

export const ThirdStep = () => {
  return (
    <Stack spacing={4}>
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
    </Stack>
  )
}

export default ThirdStep