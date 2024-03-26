import { useState } from "react";
import trashBin from "../../images/delete.svg";
import Card from "../Card/Card";
import "./orderCard.css"
import plus from "../../images/plus.svg"
import minus from "../../images/minus.svg"
import del from "../../images/delete.svg"
import OrderCardSum from "../OrderCardSum/OrderCardSum"

function OrderCard({ headphones, buttonType }) {
  const [btnType, setBtnType] = useState(buttonType);
  const savedHeadphone = (headphones || []).slice(0);

  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };

  return (
    <section className='gallery__order'>
      {savedHeadphone.map(data => {
        return (
          <><li className="order" key={data.id} name={data.name} src={data.image} price={data.price} stars={data.stars}
          >
            <div className="order__card">
              <img
                className="order__img"
                src={data.image}
                alt={`Иллюстрация фильма с названием " ${data.name}"`} />
              <div className="order__quantity">
                <button className="order__circle"><img className="order__minus" src={minus}></img></button>
                <div className="order__quantity_number">1</div>
                <button className="order__circle"><img className="order__minus" src={plus}></img></button>
              </div>
            </div>


            <div className="order__container_name">
              <h2 className="order__name">{data.name}</h2>
              <p className="order__price">{data.price}</p>
            </div>


            <div className="order__container_price">
              <img className="order__delete" src={del}></img>
              <p className="order__final_price">{data.price} &#8381;</p>
            </div>
          </li>
          <OrderCardSum price={data.price}/>
          
          
        </>
        )
      })}

    </section>
  )


}

export default OrderCard;
