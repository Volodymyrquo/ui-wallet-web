import React from "react"
import { useForm } from "react-hook-form"

const Tariffs = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" }) // initialize the hook
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="page-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>first name</h5>
        <input name="firstname" ref={register({ required: true })} />{" "}
        {/* register an input */}
        {errors.firstname && "First name is required."}
        <h5>last name</h5>
        <input name="lastname" ref={register({ required: true })} />
        {errors.lastname && "Last name is required."}
        <h5>age</h5>
        <input name="age" ref={register({ pattern: /\d+/ })} />
        {errors.age && "Please enter number for age."}
        <input type="submit" />
      </form>
    </div>
  )
}

export default Tariffs
