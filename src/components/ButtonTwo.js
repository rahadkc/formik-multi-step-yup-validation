import { Button, ButtonGroup } from "@chakra-ui/core";
import React from 'react';

export const StepButtonTwo = (props) => {
  const { handleSubmit, back, prevStep, isLastStep } = props
  
  return (
    <ButtonGroup spacing={4}>
      {back && <Button mt={4} onClick={prevStep}>Prev</Button>}
      <Button mt={4} onClick={handleSubmit}>
        {isLastStep ? 'Submit' : 'Next'}
      </Button>
    </ButtonGroup>
  )
}

export default StepButtonTwo