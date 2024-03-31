import Card from '../Card/Card.jsx';

import {checkingRelevanceValueBasket, getBasketLocalStorage, setBasketLocalStorage, ShowErrorMessage} from "../../utils/ulits.js";
import { useState } from 'react';
import "../Card/card.css";
import star from "../../images/star.svg";



export default function CardList({ headphones }) {


  function addCard() {
    localStorage.setItem('storageCardCardList', JSON.stringify(headphones));
    let newCard = document.createElement("div")
    newCard.classList.add("order__card")
  };
    
  function handleSubmitAdd(e) {
    e.preventDefault();
    addCard()  
    console.log("addCard", addCard);
  }



  return (
    <section>
      <ul className="gallery" >
        {headphones.map(data => {
          return (
            <div className="card">
      <div className="card__img-container">
        <img
          className="card__img"
          src={data.image}
          alt={`Иллюстрация фильма с названием " ${data.name}"`}
        />
      </div>
      <div className="card__container">
        <h2 className="card__name">{data.name}</h2>
        <div className="card__price">
          <p className="card__name card__name_color">{data.price} &#8381;</p>
          <span className="card__name card__discount ">{data.discount}</span>
        </div>
      </div>
      <div className="card__container">
        <div className="card__rate">
          <img className="card__star" src={star}></img>
          <p className="card__name ">{data.stars}</p>
        </div>
        <button
          className="card__name card__name_buy"
          onClick={handleSubmitAdd}
        >
          Купить
        </button>
      </div>
    </div>
          )
        })}
      </ul>
    </section>
  )
}