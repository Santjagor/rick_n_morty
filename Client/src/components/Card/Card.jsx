import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Card({ id, name, status, species, gender, origin, image, addFav, onClose, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((charFav) => {
         if (charFav.id === id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image });
      }
   }

   let location = useLocation()

   return (

      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            {/* {isFav ? (
               <button onClick={handleFavorite} className={styles.fav}>♥</button>
            ) : (
               <button onClick={handleFavorite} className={styles.notFav}>♥</button>
            )} */}

            <button onClick={handleFavorite} className={isFav ? styles.fav : styles.notFav}>★</button>

            {location.pathname === "/home" && <button className={styles.closeButton} onClick={() => { onClose(id) }}>X</button>}

         </div>

         <div className={styles.nameContainer}>
            <h2 className={styles.name}>{name}</h2>
         </div>
         <Link to={`/detail/${id}`}>
            <img className={styles.image} src={image} alt='' />
         </Link>

      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFav: function (character) {
         dispatch(addFav(character));
      },
      removeFav: function (id) {
         dispatch(removeFav(id));
      },
   };
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);