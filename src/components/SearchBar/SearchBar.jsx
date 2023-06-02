import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState("")

   function handleChange(event) {
      setId({ id: event.target.value })
   }

   return (
      <div className={styles.container}>
         <span>ID:</span>
         <input className={styles.input} type='search' value={id.id} onChange={handleChange} />
         <button className={styles.button} onClick={()=>{props.onSearch(id.id)}}>+</button>
      </div>
   );
}
