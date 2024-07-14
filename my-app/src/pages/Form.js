import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./Form.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://us-central1-concert-connect-4fcf2.cloudfunctions.net/contactus",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      reset();
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
    <div>
      <Toaster />
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
          <textarea id="comment" {...register("comment")} />
          {errors.comment && <span>{errors.comment.message}</span>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
