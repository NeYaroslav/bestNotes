import React, { useState } from 'react'
import UseForms from '../hooks/UseForms'
import notebook from '../imgs/notebook.jpg'
import { Link } from 'react-router-dom'

const Registration = () => {

  const {form, changeHandler, clearForm} = UseForms({
    email: '',
    username: '',
    password: '',
    confPassword: '',
    keepLoggedIn: false,
  })

  const [error, setError] = useState(undefined)

  const submitHandler = e => {
    e.preventDefault()
    for (const key in form) {
      // console.log(form[key]);
      if( form[key] === true || form[key] === false) continue
      if( form[key].trim().length === 0 ) {
        return setError('All fields are required!') 
      }
    }
    if(form.password !== form.confPassword ) {
      return setError(`Passwords don't match!`) 
    }else if (form.password.trim().length < 6) {
    return setError(`Password must be at least 6 characters!`) 
    }
    clearForm()
    setError(undefined)
  }

  return (
    <div className='registration registration__row'>
      <div className="registration__column">
        <img src={notebook} alt="" />
        <h1>Registration Page</h1>
      </div>
      <div className="registration__column">
        <h2>Create a new account for free!</h2>
        <p>Already have an account? <Link to={'login'}>Log in</Link></p>
        <form className='form form__registration' onSubmit={submitHandler}>
          <div className={`form__element input-form-element ${form.email && 'filled'}`}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={changeHandler}
            />
            <label>Email</label>
          </div>
          <div className={`form__element input-form-element ${form.username && 'filled'}`}>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={changeHandler}
            />
            <label>Username</label>
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
          <div className={`form__element input-form-element ${form.confPassword && 'filled'}`}>
            <input
              type="password"
              name="confPassword"
              value={form.confPassword}
              autoComplete="off"
              onChange={changeHandler}
            />
            <label>Confirm password</label>
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
          <button className='form-btn btn'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Registration