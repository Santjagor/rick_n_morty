import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import CardDetail from './components/CardDetail/CardDetail';
import Favorites from './components/Favorites/Favorites';
import About from './components/About/About';
import Login from './components/Login/Login';
import Error404 from './components/Error404/Error404';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   const navigate = useNavigate()

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = response.data
         setAccess(response.data)
         access && navigate('/home')
      } catch (err) {
         alert(err.response.data.error)
      }
   }

   function logout() {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (!characters.find(character => character.id === response.data.id)) {
            if (response.data.name) {
               setCharacters((oldChars) => [response.data, ...oldChars]);
            } else {
               window.alert("here's no characters with that ID!");
            }
         } else {
            alert(`There's already a character with the ID: ${id}`)
         }
      } catch (err) {
         alert(err.response.data.error)
      }
   }

   function onClose(id) {
      setCharacters(characters.filter(character => character.id !== Number(id)))
   }

   let location = useLocation()

   return (
      <div className='App'>
         {location.pathname === "/" ? <></> : <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path='/' element={<Login login={login} />}></Route>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}></Route>
            <Route path='/Favorites' element={<Favorites />} ></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:id' element={<CardDetail />}></Route>
            <Route path="*" element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
