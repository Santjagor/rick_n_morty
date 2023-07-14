import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./CardDetail.module.css"

export default function CardDetail() {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div>
            {
                character && character.origin ? (
                    <div className={styles.container}>

                        <img className={styles.image} src={character?.image}></img>

                        <div className={styles.infoContainer}>

                            <div className={styles.name}>
                                {character?.name}
                            </div>

                            <div className={styles.info}>{"STATUS: "}
                                {character?.status}
                            </div>

                            <div className={styles.info}>{"SPECIE: "}
                                {character?.species}
                            </div>

                            <div className={styles.info}>{"GENDER: "}
                                {character?.gender}
                            </div>

                            <div className={styles.info}>{"ORIGIN: "}
                                {character?.origin.name}
                            </div>

                            <div className={styles.id}>#
                                {character?.id}
                            </div>
                        </div>

                    </div>
                ) : ""
            }
        </div>
    )
}