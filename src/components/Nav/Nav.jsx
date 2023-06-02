import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
    const [id, setId] = useState("")

    function handleRandomClick() {
        let newID = Math.ceil(Math.random() * 826)
        setId({ id: newID })
        props.onSearch(newID)
    }

    return (
        <div className={styles.container}>
            <SearchBar onSearch={props.onSearch} />
            <Link to="/home"><button className={styles.button} onClick={handleRandomClick}>RANDOM</button></Link>
            <Link to="/home"><button className={styles.button} >HOME</button></Link>
            <Link to="/favorites"><button className={styles.button} >FAVORITES</button></Link>
            <Link to="/about"><button className={styles.button} >ABOUT</button></Link>
            <button className={styles.button} onClick={props.logout}>LOGOUT</button>
        </div>
    )
}

export default Nav
