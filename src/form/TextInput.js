import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/core"
import { useField } from 'formik'
import React from 'react'

export const TextInput = (props) => {
  const [field, meta] = useField(props.name)
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <Input size="md" {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}
