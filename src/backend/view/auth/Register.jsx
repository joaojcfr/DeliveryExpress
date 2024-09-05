import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../../../Context'
// import { Tilt } from 'react-tilt';
import styles from './Register.module.css'

// const options = {
//   reverse: false,
//   max: 5,
//   perspective: 1000,
//   scale: 1.0,
//   speed: 1000,
//   transition: true,
//   axis: null,
//   reset: true,
//   easing: "cubic-bezier(.03,.98,.52,.99)",
// };

const Register = () => {
  // password visibility
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [error, setError] = useState('');

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const { values, setValues } = useContext(myContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error message

    try {
      await axios.post('http://localhost:3002/users/register', values);
      alert('User registered successfully');
      navigate('/login');
    } catch (err) {
      console.error('Error registering user:', err);
      if (err.response) {
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
        console.error('Response headers:', err.response.headers);
        if (err.response.status === 409) {
          setError(err.response.data.message); // Set specific error message from response
        } else {
          setError(err.response.data.message || 'Error registering user'); // Set generic error message
        }
      } else if (err.request) {
        console.error('Request data:', err.request);
        setError('No response received from server'); // Set error message for no response
      } else {
        console.error('Error message:', err.message);
        setError(`Error: ${err.message}`); // Set error message for other errors
      }
    }
  };

  return (
    // <Tilt className="mt-5" options={options}>
    <div
      className={styles.main_frame}
      id={styles.signup}
    // className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20"
    >
      <div className="relative mx-auto max-w-xl rounded text-center">
        {/* Signup Header */}
        <div className="text-md mx-auto mb-5">
          <h1 className={`signup text-warning my-5 ${styles.h1}`}>Sign-Up</h1>
        </div>

        {/* Form */}
        <div className="mx-auto w-full max-w-md">
          <form autoComplete="on" id={styles.form} onSubmit={handleSubmit}>
            <div
              className={`userNameBox relative mb-2 mb-4 flex flex-col ${styles.inputbox1}`}
            >
              <label
                htmlFor="username"
                className={`form-label text-dark mb-1 text-left font-bold`}
              ></label>



              {/* username */}
              <input
                autoComplete="on"
                onChange={(e) =>
                  setValues({ ...values, username: e.target.value })
                }
                type="text"
                id="username"
                className={`username form-control username text-light m-auto block h-9 w-full rounded-5  px-4 py-6 text-sm ${styles.username}`}
                placeholder="Username"
                required
              />

              <i className={`fa-solid fa-user ms-2 ${styles.uil1}`}></i>
            </div>




            {/* inputbox1  */}
            <div
              className={`inputbox1 relative mb-2 mb-4 flex flex-col ${styles.inputbox1}`}
            >
              <label
                htmlFor="firstname"
                className={`form-label text-dark mb-1 text-left font-bold`}
              ></label>

              {/* firstname */}
              <input
                autoComplete="on"
                onChange={(e) =>
                  setValues({ ...values, firstname: e.target.value })
                }
                type="text"
                id="firstname"
                className={`firstname form-control text-light  firstname m-auto block h-9 w-full rounded-5 px-4 py-6 text-sm ${styles.firstname}`}
                placeholder="First Name"
                required
              />

              <i className={`fa-regular fa-user ms-2 ${styles.uil1}`}></i>
            </div>




            {/* inputbox2  */}
            <div
              className={`inputbox2 relative mb-2 mb-4 flex flex-col ${styles.inputbox2}`}
            >
              <label
                htmlFor="lastname"
                className={`form-label text-dark mb-1 text-left font-bold`}
              ></label>

              {/* lastname*/}
              <input
                autoComplete="on"
                onChange={(e) =>
                  setValues({ ...values, lastname: e.target.value })
                }
                type="text"
                id="lastname"
                className={`input4 form-control  m-auto block h-9 w-full text-light rounded-5 px-4 py-6 text-sm ${styles.lastname}`}
                placeholder="Last Name"
                required
              />

              <i className={`fa-regular fa-user ms-2 ${styles.uil1}`}></i>
            </div>




            {/* phoneBox */}
            <div
              className={`phoneNumberBox relative mb-2 mb-4 flex flex-col ${styles.phoneBox}`}
            >
              <label
                htmlFor="phone"
                className={`form-label text-dark mb-1 text-left font-bold`}
              ></label>

              {/* phone*/}
              <input
                autoComplete="on"
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
                type="number"
                id="phone"
                className={`input4 form-control m-auto text-light  block h-9 w-full rounded-5 px-4 py-6 text-sm ${styles.phone}`}
                placeholder="Phone"
                required
              />

              <i className={`fa-solid fa-phone ${styles.phonelogo}`}></i>
            </div>





            {/* inputbox3 */}
            <div
              className={`inputbox3 relative mb-2 mb-4 flex flex-col ${styles.inputbox3}`}
            >
              <label
                htmlFor="email"
                className={`form-label text-dark mb-1 text-left font-bold`}
              ></label>

              {/* email*/}
              <input
                autoComplete="on"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                type="email"
                id="email"
                className={`email form-control text-light m-auto block h-9 w-full rounded-5 px-4 py-6 text-sm ${styles.email}`}
                placeholder="Email Address"
                required
              />




              <i
                className={`fa-solid email fa-envelope ms-2 ${styles.emaillogo}`}
              ></i>
            </div>

            {/* inputbox4 */}
            <div
              className={`inputbox4 relative mb-2 flex flex-col ${styles.inputbox4}`}
            >
              <label
                htmlFor="password"
                className="form-label text-dark mb-1 text-left font-bold"
              ></label>



              {/*password */}
              <input
                autoComplete="on"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                type={passwordVisible ? 'text' : 'password'} // This toggles the type between 'text' and 'password'
                className={`password form-control text-light  m-auto block h-9 w-full rounded-5 px-4 ${styles.password}`}
                placeholder="Password "
                required
                id="password"
              />

              {/* passwordEye */}
              <span
                id="togglePassword"
                className={`ms-2 ${styles.uil2}`}
                onClick={handleTogglePassword}
                style={{ cursor: 'pointer' }}
              >
                {passwordVisible ? (
                  <i id="eyeOpen" className="fa-solid fa-eye"></i>
                ) : (
                  <i id="eyeClosed" className="fa fa-eye-slash"></i>
                )}
              </span>
            </div>

            {/* Checkbox */}
            <label className="mb-6 flex ps-2 items-center justify-center">
              <input
                type="checkbox"
                name="checkbox"
                className="float-left mr-2"
              />

              {/* i agree */}
              <span className="text-light inline-block cursor-pointer text-sm">
                I agree to receive market updates from Delivery Express
              </span>
            </label>

            {error && <div className={styles.error}>!!{error}</div>}

            {/* Sign Up Button */}
            <input
              type="submit"
              value="Sign Up"
              className={`submit btn mb-3 mt-0 ${styles.btn}`}
            />
          </form>

          {/*lines & OR*/}
          <div className="mb-6 mt-6 flex w-full items-center justify-around">
            <div className="ms-4 h-[2px] w-80 bg-gray-300"></div>
            <p className="text-light px-3 text-sm">OR</p>
            <div className="me-4 h-[2px] w-80 bg-gray-300"></div>
          </div>

          {/* google signup button*/}
          <button className={`relative mb-4 flex font-bold text-center w-full cursor-pointer items-center  px-6 py-3 ${styles.googlesignup}`}>

            <i className="fa-brands fa-google-plus-g text-danger"></i>
            <a
              href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"
              className="mx-auto pl-5 lg:pl-0"
            >
              <span>Sign up with Google</span>
            </a>
          </button>

          {/* facebook signup button */}
          <button className={`relative flex font-bold text-center w-full cursor-pointer items-center  px-6 py-3 ${styles.facebooksignup}`}>
            <i className="fa-brands fa-facebook text-primary"></i>
            <a href="https://facebook.com" className="mx-auto pl-5">
              <span>Sign up with Facebook</span>
            </a>
          </button>


        </div>

        <div className="customer mt-2">
          <p>
            Already have an account?{' '}
            <a className={`Login ${styles.login}`} role="button" href="./Login">
              Login
            </a>
          </p>
        </div>

        {/* Terms of Use */}
        <p className="text-light text-sm max-w-80 mx-auto mt-2">
          By proceeding, you agree to Delivery Express
          <a
            href="./termsOfServices"
            className={`ml-1 font-bold underline ${styles.policy}`}
          >
            Terms of Use & Privacy Policy.
          </a>
        </p>
      </div>
    </div>
    // </Tilt>
  )
}

export default Register
