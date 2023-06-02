import Card from '../Card/Card.jsx';
import styles from "./Favorites.module.css"
import { connect } from "react-redux";

function Favorites({ myFavorites }) {
    return <div className={styles.container}>
        {myFavorites.map(({ id, name, image }) => {
            return (
                <Card
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    // onClose={onClose}
                />
            )
        })}
    </div>;
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)