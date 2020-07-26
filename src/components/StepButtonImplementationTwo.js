import { Button } from "@chakra-ui/core";
import React from 'react';

export const StepButtonTwo = (props) => {
  const { handleSubmit, back, prevStep } = props
  const Prev = () => <Button mt={4} onClick={prevStep}>Prev</Button>
  const Submit = () => <Button mt={4} onClick={handleSubmit}>Next</Button>
  return (
    <>
      {back ? <Prev/> : <div/>}
      <Submit/>
    </>
  )
}

export default StepButtonTwo