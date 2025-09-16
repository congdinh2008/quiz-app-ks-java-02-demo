import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import type { RegisterRequestModel } from '../../models/register-request.model';
import { authService } from '../../services/auth.service';
import { useAuth } from '../../contexts/auth.context';

const Register = () => {

  const { register } = useAuth();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    username: Yup.string()
      .min(4, 'Must be at least 4 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Username is required'),
    phone: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
      .notRequired(),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const initialValues: RegisterRequestModel = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phoneNumber: '',
    isActive: true,
  };

  const onSubmit = async (values: RegisterRequestModel) => {
    // Handle registration logic here
    const responseData = await authService.register(values);
    if (responseData) {
      console.log('Registration successful', responseData);
      register(responseData);
      // Optionally, redirect to login page
    } else {
      alert('Registration failed. Please try again.');
    }
  }

  return (
    <section className="bg-white p-6 rounded-md shadow-md w-96" aria-labelledby="login-title">
      <h2 className="text-3xl font-bold mb-4 text-center ">Login</h2>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} >
        <Form>
          <div className="flex gap-[16px]">
            <div className="form-group mb-4 w-1/2">
              <label htmlFor="firstName" className='mb-2'>First Name</label>
              <Field type="text" id="firstName" name="firstName" className="block border p-2 rounded w-full"
                placeholder="Enter your first name" required />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="form-group mb-4 w-1/2">
              <label htmlFor="lastName" className='mb-2'>Last Name</label>
              <Field type="text" id="lastName" name="lastName" className="block border p-2 rounded w-full"
                placeholder="Enter your last name" required />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          <div className="flex gap-[16px]">

            <div className="form-group mb-4 w-1/2">
              <label htmlFor="email" className='mb-2'>Email Address</label>
              <Field type="email" id="email" name="email" className="border p-2 rounded w-full"
                placeholder="Enter your email" required />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="form-group mb-4 w-1/2">
              <label htmlFor="dateOfBirth" className='mb-2'>Date of Birth</label>
              <Field type="date" id="dateOfBirth" name="dateOfBirth" className="border p-2 rounded w-full" />
              <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          <div className="flex gap-[16px]">
            <div className="form-group mb-4 w-1/2">
              <label htmlFor="username" className='mb-2'>Username</label>
              <Field type="text" id="username" name="username" className="block border p-2 rounded w-full"
                placeholder="Enter your username" required />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="form-group mb-4 w-1/2">
              <label htmlFor="phone-number" className='mb-2'>Phone Number</label>
              <Field type="tel" id="phone-number" name="phoneNumber" className="block border p-2 rounded w-full"
                placeholder="Enter your phone number" />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className='mb-2'>Password</label>
            <Field type="password" id="password" name="password" className="border p-2 rounded w-full"
              placeholder="Enter your password" required />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="confirmPassword" className='mb-2'>Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" className="border p-2 rounded w-full"
              placeholder="Confirm your password" required />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="form-actions mb-4 flex justify-between items-center gap-4">
            <Link to="/" className="p-3 px-4 bg-slate-100 rounded hover:bg-slate-200 w-1/2" role="button">Back to Home</Link>
            <button type="submit" className="p-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 w-1/2">Register</button>
          </div>

          <div className="links">
            Already have an account? <Link to="/login" aria-label="Sign in to existing account">Login</Link>
          </div>
        </Form>
      </Formik>
    </section>
  )
}

export default Register;
