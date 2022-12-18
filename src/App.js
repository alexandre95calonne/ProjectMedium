import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';

import HomeScreen from './Screens/Home';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Details from './Screens/Details';
import CreateArticle from './Screens/CreateArticle';
import UpdateArticle from './Screens/UpdateArticle';

import { StoreContext, StoreProvider } from "./Providers/Store"
import { useContext } from 'react';


function App() {

    return (
        <StoreProvider>
            <BrowserRouter>

                <Header/>
                
                <Routes>
                    <Route path='/' element={<HomeScreen />}></Route>
                    <Route path='/create-article' element={<CreateArticle />}></Route>
                    <Route path='/update-article' element={<CreateArticle />}></Route>
                    <Route path='/details' element={<Details />}></Route>
                    <Route path='/sign-in' element={<SignIn />}></Route>
                    <Route path='/sign-up' element={<SignUp />}></Route>
                </Routes>

            </BrowserRouter>
        </StoreProvider>
    )

}
export default App;