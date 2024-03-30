import { useState } from "react";
import trashBin from "../../images/delete.svg";
import Card from "../Card/Card";
import "./orderCard.css";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
import del from "../../images/delete.svg";




function OrderCard({ headphones } ) {

  const [savedHeadphone, setSaveHeadphone] = useState(headphones || []);
  const [counter, setCounter] = useState(1);
  const [sum, setSum] = useState(counter);


  const deleteById = (id) => {
    setSaveHeadphone((oldValues) => {
      return oldValues.filter((data) => data.id !== id);
    });
  }

  function handleSubmitMinus(e) {
    e.preventDefault();
    if (counter > 0) {
      setCounter(count => count - 1);
    }    
  }

  function handleSubmitPlus(e) {
    e.preventDefault();
    setCounter(count => count + 1);    
  }


  return (
    <section className="gallery__order cart">
      {savedHeadphone.map((data) => {

// сумма зависит от кол-ва одного товара
  const sumOneGood = data.price * counter;

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
              <div className="order__quantity" data-counter>
                <button className="order__circle" onClick={handleSubmitMinus} d="buttonCountPlus" value="+">
                  <img className="order__minus" src={minus}></img>
                </button>
                <div className="order__quantity_number" >{counter}</div>
                <button className="order__circle" onClick={handleSubmitPlus} id="buttonCountMinus" value="-">
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
              ><img className="order__delete" src={del}></img></button>
              <p className="order__final_price">{ sumOneGood} &#8381;</p>
            </div>
          </li>
        );
      })}
    </section>
  );
}

export default OrderCard;
