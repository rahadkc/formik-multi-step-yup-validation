import { Box, Flex, Stack } from "@chakra-ui/core";
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import FinalStep from "./FinalStep";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import StepButton from "./StepButton";
import ThirdStep from "./ThirdStep";


const formData = {
  email: '',
  password: '',
  username: '',
  country: '',
  city: '',
  payment: '',
  agreement: ''
}


const firstSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(3).trim()
})
const secondSchema = yup.object().shape({
  username: yup.string().required().trim()
})
const thridSchema = yup.object().shape({
  payment: yup.string().required().trim()
})
const schemaArray = [firstSchema, secondSchema, thridSchema]

// const renderProps = (step, values) => {
//   switch (step) {
//     case 0:
//       return <FirstStep />
//     case 1:
//       return <SecondStep />
//     case 2:
//       return <ThirdStep />
//     case 3:
//       return <FinalStep values={values} />
//     default:
//       return <FirstStep />
//   }
// }

function StepForm() {
  const [step, setStep] = useState(0)

  const nextStep = (props) => {
    props.submitForm().then(() => {
      if (props.isValid && props.dirty) {
        setStep(step => step + 1)
        props.validateForm()
        props.setTouched({});
      }
    });
  }
  
  const prevStep = () => setStep(step => step - 1)
  const onSubmit = data => {console.log(JSON.stringify(data, null, 2) )}
  
  return (
    <Flex p={10} justify="center">
      <Formik
      enableReinitialize
      initialValues={{...formData}}
      validationSchema={schemaArray[step]}
      onSubmit={onSubmit}
      >
        {(props) => {
          const { values, dirty, isValid } = props
          return (
            <Box p={8} w="50%" shadow="lg" >
              <Form>
                <Stack spacing={8}>
                  {{
                    0: <FirstStep />,
                    1: <SecondStep />,
                    2: <ThirdStep />,
                    3: <FinalStep values={values} />,
                  }[step] || <div/>}
                  
                  <StepButton
                    step={step}
                    isValid={!isValid || !dirty}
                    nextStep={() => nextStep(props)}
                    prevStep={prevStep}
                  />
                </Stack>
              </Form>
            </Box>
          )
          }}
      </Formik>
    </Flex>
  );
}

export default StepForm;
