import React from 'react';
import '../../styles/Contact.css'
import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    return (
        <div>
            <h1>Contact</h1>
            <div class="row">
                <div class="col-lg-10 col-sm-12">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input class="name" {...register("fullName", { required: true })}
                        placeholder="Enter Full Name" />
                        <p class="error"> {errors.fullName?.type === 'required' && "Name is required!"} </p>

                        <input class="email" {...register("email", { required: true, pattern: emailRegex })}
                        placeholder="Email Address" />
                        <p class="error"> {errors.email && "Please enter a valid email address!"} </p>

                        <textarea class="message" {...register("message", { required: true })}
                        placeholder="Message.." />
                        <p class="error"> {errors.message && "Message is required!"} </p>

                        <input class="submit contact-btn" type="submit" />
                    </form>
                </div>
            </div>
        </div>
  );

};
