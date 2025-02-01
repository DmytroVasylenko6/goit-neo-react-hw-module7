import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import * as Yup from 'yup'
import s from './ContactForm.module.css'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsOps'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long.')
    .max(50, 'Name cannot exceed 50 characters.')
    .required('Name is required.'),
  number: Yup.string()
    .matches(/^[0-9\s\-()+]*$/, 'Phone number is not valid.')
    .min(3, 'Number must be at least 3 characters long.')
    .max(50, 'Number cannot exceed 50 characters.')
    .required('Number is required.')
})

const initialValues = { name: '', number: '' }

const ContactForm = () => {
  const dispatch = useDispatch()
  const nameId = useId()
  const numberId = useId()

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ ...values }))
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        {['name', 'number'].map((field) => (
          <div key={field} className={s.fieldContainer}>
            <label
              className={s.label}
              htmlFor={field === 'name' ? nameId : numberId}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <Field
              className={s.field}
              type="text"
              name={field}
              id={field === 'name' ? nameId : numberId}
              placeholder={
                field === 'name' ? 'Enter your name' : 'Enter your phone number'
              }
            />
            <ErrorMessage className={s.error} name={field} component="p" />
          </div>
        ))}
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  )
}

export default ContactForm
