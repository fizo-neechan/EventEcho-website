import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); 
  };

  const formOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+\.\S+$/, 
        message: "Please enter a valid email address",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" {...register("firstName")} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" {...register("lastName")} />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          {...register("email", formOptions.email)}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className="form-group full-width">
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          {...register("comment", { required: "Please enter your comment" })}
        />
        {errors.comment && <span>{errors.comment.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
