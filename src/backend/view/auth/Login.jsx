import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import styles from './Login.module.css'
import { AuthContext, myContext } from '../../../Context'
// import { Tilt } from 'react-tilt';

const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const { setUser, values, setValues, } = useContext(myContext)
  //   const [values, setValues] = useState({ email: '', password: '' });
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error message

    try {
      await handleLogin(values.email, values.password);
      const res = await axios.post('http://localhost:3002/users/login', values);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      navigate('/');
      window.location.reload();
      console.log('Logged in user:', res.data.user);
    } catch (err) {
      console.error('Error logging in:', err);
      if (err.response) {
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
        console.error('Response headers:', err.response.headers);
        setError(`Error: ${err.response.data}`); // Set error message
      } else if (err.request) {
        console.error('Request data:', err.request);
        setError('No response received from server'); // Set error message
      } else {
        console.error('Error message:', err.message);
        setError(`Error: ${err.message}`); // Set error message
      }
    }
  };

  return (
    // <Tilt className="mt-5" options={options}>
    <div className={styles.main_frame} id={styles.login}>
      <div className="frame_top">
        <h1 className={`login text-warning my-5 text-7xl ${styles.h1}`}>
          Login
        </h1>
      </div>

      <form autoComplete="on" id={styles.form} onSubmit={handleSubmit}>
        {/* inputbox1 */}
        <div className={`inputbox1 mb-2 ${styles.inputbox1}`}>
          <label htmlFor="email" className="form-label"></label>


          {/* email */}
          <input
            autoComplete="on"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="text"
            className={`email form-control rounded-5 text-light bg-dark ${styles.email}`}
            placeholder="Email Address"
            required
            id="email"
            aria-describedby="emailHelp"
          />
          <i className={`ms- fa-solid fa-envelope ${styles.emaillogo}`}></i>
        </div>



        {/* inputbox2 */}
        <div className={`inputbox2 ${styles.inputbox2}`}>
          <label htmlFor="password" className="form-label"></label>
          {/* password password*/}
          <input
            autoComplete="on"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            type={passwordVisible ? 'text' : 'password'}
            className={`password form-control rounded-5 text-light bg-dark ${styles.password}`}
            placeholder="Password"
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
              <i id="eyeClosed" className="fa-solid fa-eye-slash"></i>
            )}
          </span>
          {/* Remember Me Checkbox */}
          <div className={`forgetpw mt-2 ${styles.forgetpw}`}>
            <label htmlFor="checkbox">
              <input type="checkbox" className="me-2" id="checkbox" />
              <span>Remember Me</span>
            </label>

            {/* Forget Password */}
            <div className={`pw ${styles.pw}`}>
              <a href="#">Forget password?</a>
            </div>

          </div>

          {error && <div className={styles.error}>{error}</div>}
          <br />
          {/* Login Button */}
          <button
            type="submit"
            className={`submit btn mb-3 mt-0 ${styles.btn}`}
            id="submit-button"
          >
            Login
          </button>{' '}
          <br />
          {/* lines & OR */}
          <span className={`OR login-form-copy mb-3 mx-9 ${styles.OR}`}>
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
              alt=""
              className="inline-block"
            />
            <p className="px-2">OR</p>
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
              alt=""
              className="inline-block"
            />
          </span>


          {/* Social Media Signup Buttons*/}
          <div className={`socialContainer flex ${styles.socialContainer}`}>

            {/* facebook */}
            <div className={`social-icon facebook ${styles.facebook}`}>
              <span className="#">
                <a href="https://facebook.com">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </span>
            </div>


            {/* instagram */}
            <div className={`social-icon instagram ${styles.instagram}`}>
              <span className="#">
                <a href='https://instagram.com'>
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </span>
            </div>


            {/* google */}
            <div className={`social-icon google ${styles.google}`}>
              <span className="#">
                <a href='https://google.com'>
                  <i className="fa-brands fa-google"></i>
                </a>
              </span>
            </div>


            {/* linkedin */}
            <div className={`social-icon linkedin ${styles.linkedin}`}>
              <span className="#">
                <a href='https://linkedin.com'>
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </span>
            </div>


            {/* twitter */}
            <div className={`social-icon twitter ${styles.twitter}`}>
              <span className="#">
                <a href='https://twitter.com'>
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </span>
            </div>

          </div>


          {/* Don't have an account & Sign Up */}
          <div className={`mt-4 createnew ${styles.createnew}`}>
            <span>
              Don't have an account? <a className='ms-2' role='button' href="./Register">Sign Up</a>
            </span>
          </div>
        </div>

      </form>
    </div>
    // </Tilt>
  )
}

export default Login
