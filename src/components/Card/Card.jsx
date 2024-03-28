import { useState } from "react";
import "./card.css";
import star from "../../images/star.svg"

import {checkingRelevanceValueBasket, getBasketLocalStorage, setBasketLocalStorage, ShowErrorMessage} from "../../utils/ulits.js";
import { Navigate } from "react-router-dom";



// Рендер карточки
function Headphones({ nextId, headphones, card, id, src, name, stars, price, discount, setHeadphones, handleSubmitBasket}) {


  function handleSubmitBasket(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
    
  }


  
  return (
              <div
                className="card" id={"product-" + id}>
                <div className="card__img-container" >
                  <img
                    className="card__img"
                    src={src}
                    alt={`Иллюстрация фильма с названием " ${name}"`}
                  />
                </div>
                <div className="card__container">
                  <h2 className="card__name">{name}</h2>
                  <div className="card__price">
                    <p className="card__name card__name_color">{price} &#8381;</p>
                    <span className="card__name card__discount ">{discount}</span>
                  </div>
                </div>
                <div className="card__container">
                  <div className="card__rate">
                    <img className="card__star" src={star}></img>
                    <p className="card__name ">{stars}</p>
                  </div>
                  <button className="card__name card__name_buy"
                  onClick={handleSubmitBasket}
                  >Купить</button>
                </div>
              </div>
      );
}

      export default Headphones;
