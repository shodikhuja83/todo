import React from 'react'
import { Formik, Field } from 'formik';
import {
  Link
} from "react-router-dom";
import {
  Form,
  Button,
} from 'react-bootstrap'
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  completed: Yup.bool()
});

const TodoForm = ({ onSubmit, initialValues }) => (
  <Formik
    onSubmit={onSubmit}
    initialValues={initialValues}
    validationSchema={validationSchema}
  >
    {(formikProps) => (
      <Form
        onReset={formikProps.handleReset}
        onSubmit={formikProps.handleSubmit}
      >
        <Field name="title">
          {({
           field, // { name, value, onChange, onBlur }
           form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
           meta,
          }) => (
            <Form.Group controlId="title">
              <Form.Control type="text" placeholder="Enter Todo" {...field} />
              {meta.touched && meta.error && (
                <Form.Text className="text-muted">
                  {meta.error}
                </Form.Text>
              )}
            </Form.Group>
          )}
       </Field>
        <Field name="completed">
          {({ field }) => (
            <Form.Group controlId="completed">
              <Form.Check
                id="completed"
                type="checkbox"
                label="Completed"
                checked={field.value}
                {...field}
              />
            </Form.Group>
          )}
       </Field>

        <Button
          type="submit"
          variant="primary"
          disabled={formikProps.isSubmitting}
        >
          Submit
        </Button>
        {' '}
        <Link to="/">
          Cancel
        </Link>
      </Form>
    )}
  </Formik>
);


export default TodoForm;
