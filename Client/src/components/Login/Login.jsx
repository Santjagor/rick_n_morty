import { useState } from "react"
import styles from "./Login.module.css"
import validate from "./validations"

export default function Login(props) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        const property = event.target.name
        const value = event.target.value
        setUserData({
            ...userData,
            [property]: value
        })
        setErrors(validate({ ...userData, [property]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.login(userData)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>

                <div>
                    {/* <label htmlFor="mail">Mail:</label> */}
                    <div className={styles.label}>Mail:</div>
                    <input type="text" name="email" value={userData.mail} onChange={handleChange} className={errors.email ? styles.error : styles.success}></input>
                    <p className={styles.errorAlert}>{errors.mail}</p>
                </div>

                <div>
                    {/* <label htmlFor="password">Password:</label> */}
                    <div className={styles.label}>Password:</div>
                    <input type="text" name="password" value={userData.password} onChange={handleChange} className={errors.email ? styles.error : styles.success}></input>
                    <p className={styles.errorAlert}>{errors.password}</p>
                </div>

                <button type="submit" className={styles.loginButton}>LOGIN</button>

            </form>
        </div>
    )
}