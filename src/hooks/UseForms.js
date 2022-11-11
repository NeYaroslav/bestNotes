import { useState } from "react"

const UseForms = (initialValues) => {
  const [form, setForm] = useState(initialValues)

  const changeHandler = (e) => {
    const {type, value, name} = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? !prevForm[name] :value
    }))
  }
  const clearForm = () => {
    setForm(initialValues)
  }
  return{
    form,
    setForm,
    changeHandler,
    clearForm
  }
}

export default UseForms