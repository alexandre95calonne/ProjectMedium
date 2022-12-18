import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { StoreContext } from "../Providers/Store"
import { CardsContainer } from "../styles/Cards.style"

export default function Cards() {

    const [articlesPage, setArticlesPage] = useState([])

    function getArticles() {

        fetch('http://edu.project.etherial.fr/articles').then((res) => {
      res.json().then((json) =>{
          setArticlesPage(json.data)
      })
    })

    }

    useEffect(() => {
    
        getArticles()
    
    }, [])
    
    return (
        <CardsContainer>

            <h1>Articles List</h1>

            <div className="ensemble-cards">
            {
                articlesPage.map((article, index) => {
                    return (
                        <div className="card">
                            <h5> Titre : {article.title}</h5>
                            <p> Category: {article.content} </p>
                            <p><Link to="/details" state={{ article: article }}>See details</Link></p>
                        </div>
                    )
                })
            }
            </div>
        </CardsContainer>
    )
}