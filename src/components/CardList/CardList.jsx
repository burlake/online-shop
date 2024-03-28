import Card from '../Card/Card';

import {checkingRelevanceValueBasket, getBasketLocalStorage, setBasketLocalStorage, ShowErrorMessage} from "../../utils/ulits.js";
import { useState } from 'react';



export default function CardList({ headphones, handleCardClick }) {

  return (
    <section>
      <ul className="gallery" >
        {headphones.map(data => {
          return (
            <Card key={data.id} data-product-id={data.id} name={data.name} src={data.image} price={data.price} discount={data.discount} stars={data.stars}/>
          )
        })}
      </ul>
    </section>
  )
}