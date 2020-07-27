import { Skeleton } from '@chakra-ui/core'
import React from 'react'

const SkeletonUi = ({h='20px', n=3}) => Array(n).fill().map((_,i) => 
<Skeleton key={i} height={h} my="10px" />)

export default SkeletonUi
  
