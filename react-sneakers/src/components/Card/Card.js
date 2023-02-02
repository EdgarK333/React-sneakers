import React from 'react';
import styles from './Card.module.scss';



function Card({onFavorite,onPlus,title,imageUrl,price}) {
const[isAdded,setIsAdded]=React.useState(false);
const [isFavorite,setIsFavorite]=React.useState(false);

const onClickPlus = () => {
  onPlus({title,imageUrl,price});
  setIsAdded(!isAdded);
};

const onClickFavorite=() =>{
  onFavorite({title,imageUrl,price});
  setIsFavorite(!isFavorite);
}

return (
<div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
      <img src={isFavorite ? "/img/liked.jpg" : "/img/unlike.svg"} alt="unlike" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5> {title}</h5>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        
          <img
           className="button"
            onClick={onClickPlus}
             src={isAdded ? "/img/greenPlus.jpg" : "/img/plus.svg"} 
             alt="plus"
             />

             
        
      </div>
    </div>
    );



}


export default Card;