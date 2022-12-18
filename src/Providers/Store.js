import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext()

export function StoreProvider(props) {

    const [articles, setArticles] = useState([])

    const [token, setToken] = useState([])

    useEffect(() => {
    
    setToken(localStorage.getItem('token'))
    
    }, [])

    return (
        <StoreContext.Provider value={{
            articles: articles,
            setArticles: setArticles,
            token: token,
            setToken: setToken
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}