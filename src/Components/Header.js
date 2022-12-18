import { Global } from "../styles/Header.styled"
import { useContext } from "react";
import { StoreContext } from "../Providers/Store";
import { Link } from 'react-router-dom';
import Home from '../Screens/Home'
import CreateArticle from "../Screens/CreateArticle";
import { useForm } from "react-hook-form";

export default function Header() {

    const { token, setToken } = useContext(StoreContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = () => logOut()


    function logOut() {
        setToken(localStorage.removeItem('token'))
    }


    return (
        <Global>
            <img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="medium-logo"/>
            <ul>
                <li><Link to="/">Articles</Link></li>
                {
                    token &&
                    <div className="cc">
                        <ul> 
                            <li><Link to="/create-article">Create an article</Link></li>
                        </ul>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="submit" value="Log out"/>
                        </form>
                    </div>

                    

                }

                {
                    !token &&
                    <ul><li><Link to="/sign-in">Sign in</Link></li>
                    <li><Link to="/sign-up">Sign up</Link></li></ul>
                    
                }
            </ul>
        </Global>
    )
}