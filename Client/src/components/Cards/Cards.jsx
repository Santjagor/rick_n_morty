import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'

export default function Cards(props) {
   return <div className={styles.container}>
      {props.characters.map((character) => {
         return (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={props.onClose}
            />
         )
      })}
   </div>;
}
