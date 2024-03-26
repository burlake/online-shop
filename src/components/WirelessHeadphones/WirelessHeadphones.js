import { useState } from "react";
import { Link } from "react-router-dom";
import star from "../../images/star.svg"

function WirelessHeadphones({ card, wirelessHeadphones, buttonType }) {
  const [btnType, setBtnType] = useState(buttonType);
  const wirelessHeadphone = (wirelessHeadphones || []).slice(0);

  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };

  return (
    <>
      <section>
        <section className="gallery">
          {wirelessHeadphone.map((data) => {
            return (
              <div
                className="card"
                key={data.id}
                name={data.name}
                src={data.image}
                price={data.price}
                stars={data.stars}
              >
                <>
                  <img
                    className="card__img"
                    src={data.image}
                    alt={`Иллюстрация фильма с названием " ${data.name}"`}
                  />
                </>
                <div className="card__container">
                  <h2 className="card__place">{data.name}</h2>
                  <p className="card__place">{data.price}  &#8381;</p>
                </div>
                <div className="card__container">
                  <div>
                    <img src={star}></img>
                    <p className="card__place">{data.stars}</p>
                  </div>
                  <p className="card__place">Купить</p>
                </div>
              </div>
            );
          })}
        </section>
      </section>

    </>
  );
}

export default WirelessHeadphones;
