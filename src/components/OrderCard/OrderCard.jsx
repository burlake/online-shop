import { useState } from "react";
import trashBin from "../../images/delete.svg";
import Card from "../Card/Card";
import "./orderCard.css";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
import del from "../../images/delete.svg";
import OrderCardSum from "../OrderCardSum/OrderCardSum";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../userCard/userCard";
import { ERROR_SERVER, NO_ITEMS_CART } from "../../utils/constants.js";
import {
  setBasketLocalStorage,
  getBasketLocalStorage,
  checkingRelevanceValueBasket,
} from "../../utils/ulits.js";

function OrderCard({ headphones }) {
  // const savedHeadphone = (headphones || []).slice(0);

  const [savedHeadphone, setSaveHeadphone] = useState(headphones || []);

  

  const deleteById = (id) => {
    setSaveHeadphone((oldValues) => {
      return oldValues.filter((data) => data.id !== id);
    });
    
  };


  return (
    <section className="gallery__order">
      {savedHeadphone.map((data) => {
        return (
          <li
            className="order"
            key={data.id}
            name={data.name}
            src={data.image}
            quantity={data.quantity}
            price={data.price}
            stars={data.stars}
          >
            <div className="order__card">
              <img
                className="order__img"
                src={data.image}
                alt={`Иллюстрация фильма с названием " ${data.name}"`}
              />
              <div className="order__quantity">
                <button className="order__circle">
                  <img className="order__minus" src={minus}></img>
                </button>
                <div className="order__quantity_number">{data.quantity}</div>
                <button className="order__circle">
                  <img className="order__plus" src={plus}></img>
                </button>
              </div>
            </div>

            <div className="order__container_name">
              <h2 className="order__name">{data.name}</h2>
              <p className="order__price">{data.price}</p>
            </div>

            <div className="order__container_price">
              <button
                onClick={() => deleteById(data.id)}
                className="order__delete"
                src={del}
              ></button>
              <p className="order__final_price">{data.price} &#8381;</p>
            </div>
          </li>
        );
      })}
    </section>
  );
}

export default OrderCard;
