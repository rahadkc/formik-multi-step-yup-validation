import { Box, Flex, Progress, useToast } from "@chakra-ui/core";
import styled from '@emotion/styled';
import loadable from '@loadable/component';
import { Form, Formik } from 'formik';
import pMinDelay from 'p-min-delay';
import React, { useState } from 'react';
import { firstSchema, secondSchema, thridSchema } from "./Schema";
import SkeletonUi from './utils/Skeleton';

const AsyncPage = loadable(p => pMinDelay(import(`./${p.path}`), 100), {
  cacheKey: props => props.path,
  fallback: <SkeletonUi />
})


const formData = {
  email: '',
  password: '',
  username: '',
  country: '',
  city: '',
  payment: '',
  agreement: ''
}

const schemaArray = [firstSchema, secondSchema, thridSchema]


function StepForm() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const totalSteps = 4
  
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  
  
  const submitForm = async (values, formikBag) => {
    await sleep(1500)
    alert(JSON.stringify(values, null, 2))
    formikBag.setSubmitting(false)
    formikBag.resetForm({ values: '' })
    setStep(1)
    toast({
      title: 'You Successfully get caught.',
      description: "Mu Ha Ha Ha! I've got all your personal information.",
      status: "success",
      duration: 9000,
      isClosable: true
    })
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
  const stepValue = () =>  (100/(totalSteps-1) * (step-1))
  const StepIndicator = ({step}) => <Indicator>{step}</Indicator>
  
  return (
    <Flex direction="column" align="center" p={10} justify="center">
      <Box w="50%">
        <Wrap>
          {Array(totalSteps).fill().map((_,i) => <StepIndicator key={i} step={i+1}/>)}
        </Wrap>
        <Progress size="md" value={stepValue()} />
      </Box>

      <Formik
      enableReinitialize
      initialValues={{...formData}}
      validationSchema={schemaArray[step-1]}
      onSubmit={handleSubmit}
      >
        {(props) => {
          const { values, isValid, isSubmitting, handleSubmit } = props
          return (
            <Box p={8} w="50%" shadow="lg" >
              <Form>
                {{
                  1: <AsyncPage path="FirstStep" />,
                  2: <AsyncPage path="SecondStep" />,
                  3: <AsyncPage path="ThirdStep" />,
                  4: <AsyncPage path="FinalStep" values={values} />,
                }[step] || <div/>}
                
                <AsyncPage
                  path="ButtonTwo"
                  back={step > 1}
                  isLastStep={isLastStep()}
                  isValid={isValid}
                  prevStep={prevStep}
                  isSubmitting={isSubmitting}
                  handleSubmit={handleSubmit}
                />
              </Form>
            </Box>
          )
          }}
      </Formik>
    </Flex>
  );
}

export default StepForm;


const Indicator = styled.div`
width: 40px;
height: 40px;
line-height: 40px;
background-color: #3182ce;
text-align: center;
color: white;
font-size: 20px;
border-radius: 50%;
font-weight: bold;
bottom: 0;
&:first-of-type {
  margin-left:-3px;
}
&:last-of-type {
  margin-right:-3px;
}
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: -26px;
  z-index: 1;
`

