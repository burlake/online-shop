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
                  <h2 className="card__place">{name}</h2>
                  <p className="card__place">{price} &#8381;</p>
                </div>
                <div className="card__container">
                  <div>
                  <img src={star}></img>
                  <p className="card__place">{stars}</p>
                </div>
                <p className="card__place">Купить</p>
                </div>
              </li>
      );
}

      export default Headphones;
