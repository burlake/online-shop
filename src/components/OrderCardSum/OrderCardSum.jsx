import { useState } from "react";
import trashBin from "../../images/delete.svg";
import Card from "../Card/Card";
import "../OrderCard/orderCard.css"
import plus from "../../images/plus.svg"
import minus from "../../images/minus.svg"
import del from "../../images/delete.svg"
import OrderCard from "../OrderCard/OrderCard";

function OrderCardSum({ headphones, buttonType, price }) {
  const [btnType, setBtnType] = useState(buttonType);
  const savedHeadphone = (headphones || []).slice(0);

  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };


  return (
          <div className="order__final">
          <div className="order__final_container">
            <p className="order__final_text">ИТОГО</p>
            <p className="order__final_price">&#8381; {price}</p>
          </div>
          <button className="order__final_ordering">Перейти к оформлению</button>
        </div>
        )

}

export default OrderCardSum;
