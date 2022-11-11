import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseForms from '../hooks/UseForms'
import notebook from '../imgs/notebook.jpg'


const LogIn = () => {
   const {form, changeHandler, clearForm} = UseForms({
    emailUsername: '',
    password: '',
    keepLoggedIn: false,
  })

  const [error, setError] = useState(undefined)

  const submitHandler = e => {
     e.preventDefault()
    // for (const key in form) {
    //   // console.log(form[key]);
    //   if( form[key] === true || form[key] === false) continue
    //   if( form[key].trim().length === 0 ) {
    //     return setError('All fields are required!') 
    //   }
    // }
    // if(form.password !== form.confPassword ) {
    //   return setError(`Passwords don't match!`) 
    // }else if (form.password.trim().length < 6) {
    // return setError(`Password must be at least 6 characters!`) 
    // }
    clearForm()
    setError(undefined)
  }

  return (
    <div className='log-in log-in__row'>
      <div className="log-in__column">
        <img src={notebook} alt="" />
        <h1>LogIn Page</h1>
      </div>
      <div className="log-in__column">
        <h2>Welcome back!</h2>
        <p>Don't have an account yet? <Link to={'/'}>Register a new one</Link></p>
        <form className='form form__log-in' onSubmit={submitHandler}>
          <div className={`form__element input-form-element ${form.emailUsername && 'filled'}`}>
            <input
              type="text"
              name="emailUsername"
              value={form.emailUsername}
              onChange={changeHandler}
            />
            <label>Email or username</label>
          </div>
          <div className={`form__element input-form-element ${form.password && 'filled'}`}>
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={form.password}
              onChange={changeHandler}
            />
            <label>Password</label>
          </div>
          <div className="form__element">
            <div className="custom-checkbox">
              <input
                className='checkbox'
                type="checkbox"
                id="keepLoggedIn"
                name='keepLoggedIn'
                checked={form.keepLoggedIn}
                onChange={changeHandler}
              />
              <label className='checkbox' htmlFor="keepLoggedIn"></label>
            </div>
            <span>Keep me logged in </span>
          </div>
          {error && <p>{error}</p>}
          <button className='form-btn btn'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default LogIn