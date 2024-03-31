import { useState } from "react";
import trashBin from "../../images/delete.svg";
import Card from "../Card/Card";
import "../OrderCard/orderCard.css"
import plus from "../../images/plus.svg"
import minus from "../../images/minus.svg"
import del from "../../images/delete.svg"
import OrderCard from "../OrderCard/OrderCard";

function OrderCardSum({ headphones, buttonType, sumOneGood }) {
  const [btnType, setBtnType] = useState(buttonType);

  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };

  const totalSum = sumOneGood

  return (
          <div className="order__final">
          <div className="order__final_container">
            <p className="order__final_text">ИТОГО</p>
            <p className="order__final_price order__final_sum">&#8381; {totalSum}</p>
          </div>
          <button className="order__final_ordering">Перейти к оформлению</button>
        </div>
        )

}

export default OrderCardSum;
