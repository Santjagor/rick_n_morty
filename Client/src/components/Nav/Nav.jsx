import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


function Nav(props) {
    const [id, setId] = useState("")

    function handleRandomClick() {
        let newID = Math.ceil(Math.random() * 826)
        setId({ id: newID })
        props.onSearch(newID)
    }

    let location = useLocation()

    return (<>
        <div className={styles.container}>
            <Link to="/home"><button className={location.pathname === "/home" ? styles.buttonActive : styles.buttonDefault} >HOME</button></Link>
            <SearchBar onSearch={props.onSearch} />
            <Link to="/home"><button className={styles.buttonDefault} onClick={handleRandomClick}>RANDOM</button></Link>
            <Link to="/favorites"><button className={location.pathname === "/favorites" ? styles.buttonActive : styles.buttonDefault} >FAVORITES</button></Link>
            <Link to="/about"><button className={location.pathname === "/about" ? styles.buttonActive : styles.buttonDefault} >ABOUT</button></Link>
            <button className={styles.buttonDefault} onClick={props.logout}>LOGOUT</button>
        </div>
    </>)
}

export default Nav
