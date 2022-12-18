import { SignContainer } from "../styles/Sign.style"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form";

export default function SignUp() {

    let navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => createArticle(data)
    
    
    function createArticle(data) {

        fetch("http://edu.project.etherial.fr/articles", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify({
                title: data.title,
                content: data.content,
                article_category_id: data.article_category_id,
            })
        }).then(function(response) {

            response.json().then(function(json) {

               console.log(json)

               //navigate('/')
    
            })

        })

    };

    return (
        <SignContainer>
            <h1>Let's create a new article !</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input {...register("title", { required: true })} placeholder="Title..."/>
            {errors.title && <span>This field is required</span>}

            <input {...register("content", { required: true })} placeholder="Content..."/>
            {errors.content && <span>This field is required</span>}

            <input {...register("article_category_id", { required: true })} placeholder="Article_category_id..."/>
            {errors.article_category_id && <span>This field is required</span>}
            
            <input type="submit" />
            </form>
        </SignContainer>
    )
}