import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactContainer } from "./index.styles";

const schema = yup
  .object({
    fullName: yup.string().min(3, "Your full name should be at least 3 characters.").required("Please enter your full name"),
    subject: yup.string().min(3, "Your subject should be at least 3 characters.").required("Please enter a subject"),
    email: yup.string().email().required("Please enter a valid email address"),
    body: yup.string().min(3, "Your body should be at least 3 characters.").required("Please enter a body"),
  })
  .required();

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setIsSubmitted(true);
  }

  return (
    <ContactContainer>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full name:</label>
        <input {...register("fullName")} />
        <p>{errors.fullName?.message}</p>

        <label htmlFor="subject">Subject:</label>
        <input {...register("subject")} />
        <p>{errors.subject?.message}</p>

        <label htmlFor="email">Email:</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>

        <label htmlFor="body">Body:</label>
        <input {...register("body")} />
        <p>{errors.body?.message}</p>

        <button type="submit" disabled={isSubmitted ? true : false}>
          Send message
        </button>
      </form>
      {isSubmitted ? <p>Message sent!</p> : ""}
    </ContactContainer>
  );
}
