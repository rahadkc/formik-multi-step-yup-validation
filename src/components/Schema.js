import * as yup from 'yup';

export const firstSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(3).trim()
})
export const secondSchema = yup.object().shape({
  username: yup.string().required().trim()
})
export const thridSchema = yup.object().shape({
  payment: yup.string().required().trim()
})