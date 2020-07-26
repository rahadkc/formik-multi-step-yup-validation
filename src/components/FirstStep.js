import { Stack } from '@chakra-ui/core'
import React from 'react'
import { TextInput } from '../form/TextInput'

export const FirstStep = () => {
  return (
    <Stack spacing={4}>
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
    </Stack>
  )
}

export default FirstStep