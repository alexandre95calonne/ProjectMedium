import Header from "../Components/Header"
import Cards from "../Components/Card"

export default function Home() {

    console.log(localStorage.getItem('token'))
    
    return (
        <>
        <Cards/>
        </>
    )

}