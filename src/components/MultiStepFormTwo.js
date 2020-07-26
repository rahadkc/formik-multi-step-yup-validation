import { Box, Flex, Stack } from "@chakra-ui/core";
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import FinalStep from "./FinalStep";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import StepButtonTwo from './StepButtonImplementationTwo';
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


function StepForm() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  

  const submitForm = async (values, formikBag) => {
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    formikBag.setSubmitting(false)
  }
  

  const handleSubmit = (values, formikBag) => {
    const { setSubmitting, setTouched } = formikBag
    if (!isLastStep()) {
      setSubmitting(false)
      setTouched({})
      nextStep()
      return;
    }
    submitForm(values, formikBag)
  }
  
  
  const nextStep = () => setStep(step => step + 1)
  const prevStep = () => setStep(step => step - 1)
  const isLastStep = () => step === totalSteps 
  
  return (
    <Flex p={10} justify="center">
      <Formik
      enableReinitialize
      initialValues={{...formData}}
      validationSchema={schemaArray[step-1]}
      onSubmit={handleSubmit}
      >
        {(props) => {
          const { values, isValid, handleSubmit } = props
          return (
            <Box p={8} w="50%" shadow="lg" >
              <Form>
                <Stack spacing={8}>
                  {{
                    1: <FirstStep />,
                    2: <SecondStep />,
                    3: <ThirdStep />,
                    4: <FinalStep values={values} />,
                  }[step] || <div/>}
                  
                  <StepButtonTwo
                    back={step > 1 && step < totalSteps}
                    isValid={isValid}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
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
