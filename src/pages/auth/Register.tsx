import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Register = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const register = (values: { username: string; password: string }) => {
    console.log('Registering with', values);
    // Handle registration logic here
  }

  return (
    <section className="bg-white p-6 rounded-md shadow-md w-96" aria-labelledby="login-title">
      <h2 className="text-3xl font-bold mb-4 text-center ">Login</h2>
      <Formik initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={register} >
        <Form>
          <div className="form-group">
            <label >Username</label>
            <Field name="username" placeholder="Username" className="border p-2 rounded mb-2 w-full" />
            <ErrorMessage name="username" />
          </div>
          <div className="form-group">
            <label >Password</label>
            <Field name="password" placeholder="Password" className="border p-2 rounded mb-2 w-full" type="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  )
}

export default Register;
