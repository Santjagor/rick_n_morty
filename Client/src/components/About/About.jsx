import styles from "./About.module.css"

export default function About() {
    return (
        <div className={styles.container}>
            <img src="https://imageup.me/images/e01b36a9-259e-412a-be95-03dc9481dceb.png" alt="bg" className={styles.image} />
            <h1 className={styles.title}>RICK & MORTY</h1>
            <h2 className={styles.subtitle}>by El Santi</h2>
            <p className={styles.text}></p>
            <p className={styles.text}>Estética: 0%</p>
            <p className={styles.text}>Eficiencia: 0%</p>
            <p className={styles.text}>Refactor: 0%</p>
            <p className={styles.text}>Amor♥: 100%</p>
        </div>
    )
}