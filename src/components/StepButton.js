import { Button, ButtonGroup } from "@chakra-ui/core";
import React from 'react';

export const StepButton = (props) => {
  const { step, nextStep, prevStep } = props
  const Prev = () => <Button mt={4} onClick={prevStep}>Prev</Button>
  const Next = () => <Button mt={4} onClick={nextStep}>Next</Button>
  const Submit = () => <Button mt={4} type="submit">Submit</Button>
  return (
    <>
      {{
        0: <Next/>,
        1: <ButtonGroup spacing={4}><Prev/><Next/></ButtonGroup>,
        2: <ButtonGroup spacing={4}><Prev/><Next/></ButtonGroup>,
        3: <Submit/>,
      }[step] || <div/>}
    </>
  )
}

export default StepButton