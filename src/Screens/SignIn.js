import { SignContainer } from "../styles/Sign.style"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { removeItem } from "localforage";
import { useContext, useState } from "react";
import { StoreContext } from "../Providers/Store";

export default function SignUp() {

    const {token, setToken} = useContext(StoreContext)

    let navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>  signIn(data)
    
    
    function signIn(data) {

        console.log(data)

        fetch("http://edu.project.etherial.fr/auth", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then(function(response) {

            response.json().then(function(json) {

                console.log(json)
                localStorage.setItem('token', json.data.token)
                setToken(json.data.token)

               navigate('/')
               //console.log(localStorage.getItem('token'))

                //localStorage.removeItem('token')
            })

        })

    };


    return (
        <SignContainer>
            <h1>Let's sign in!</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input {...register("email", { required: true })} placeholder="Email..."/>
            {errors.email && <span>This field is required</span>}

            <input {...register("password", { required: true })} placeholder="Password..."/>
            {errors.password && <span>This field is required</span>}
            
            <input type="submit" />
            </form>

        </SignContainer>
    )
}