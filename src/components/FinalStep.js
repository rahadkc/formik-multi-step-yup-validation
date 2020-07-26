import { List, ListItem, Text } from '@chakra-ui/core'
import React from 'react'

const FinalStep = ({values}) => {
  return (
    <List spacing={4}>
      {Object.keys(values).map((key) => <ListItem key={key}> 
        <Text fontWeight="bold">{key.toLocaleUpperCase()}</Text>
        {values[key]}
      </ListItem>)}
    </List>
  )
}

export default FinalStep
