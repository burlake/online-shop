import { useState } from "react";
import "./card.css";
import star from "../../images/star.svg"

function Headphones({ card, headphones, buttonType, src, name, stars, price }) {
  const [btnType, setBtnType] = useState(buttonType);
  const headphone = (headphones || []).slice(0);

  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };

  return (
              <li
                className="card"
              >
                <>
                  <img
                    className="card__img"
                    src={src}
                    alt={`Иллюстрация фильма с названием " ${name}"`}
                  />
                </>
                <div className="card__container">
                  <h2 className="card__name">{name}</h2>
                  <p className="card__name card__name_color">{price} &#8381;</p>
                </div>
                <div className="card__container">
                  <div className="card__rate">
                    <img className="card__star" src={star}></img>
                    <p className="card__name ">{stars}</p>
                  </div>
                  <button className="card__name card__name_buy">Купить</button>
                </div>
              </li>
      );
}

      export default Headphones;
