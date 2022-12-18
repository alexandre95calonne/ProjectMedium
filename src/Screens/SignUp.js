import { SignContainer } from "../styles/Sign.style"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form";

export default function SignUp() {

    let navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => signUp(data)
    
    
    function signUp(data) {

        fetch("http://edu.project.etherial.fr/users", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                password_verif: data.password_verif
            })
        }).then(function(response) {

            response.json().then(function(json) {

               console.log(json)

               //navigate('/sign-in')
    
            })

        })

    };

    return (
        <SignContainer>
            <h1>Let's sign up !</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input {...register("firstname", { required: true })} placeholder="Firstname..."/>
            {errors.firstname && <span>This field is required</span>}

            <input {...register("lastname", { required: true })} placeholder="Lastname..."/>
            {errors.lastname && <span>This field is required</span>}

            <input {...register("email", { required: true })} placeholder="Email..."/>
            {errors.email && <span>This field is required</span>}

            <input {...register("password", { required: true })} placeholder="Password..."/>
            {errors.password && <span>This field is required</span>}

            <input {...register("password_verif", { required: true })} placeholder="Password verif..."/>
            {errors.password_verif && <span>This field is required</span>}
            
            <input type="submit" />
            </form>
            <Link to="/sign-in">Already sign up ? Click here !</Link>
        </SignContainer>
    )
}