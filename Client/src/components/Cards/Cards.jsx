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
               image={character.image}
               onClose={props.onClose}
            />
         )
      })}
   </div>;
}
