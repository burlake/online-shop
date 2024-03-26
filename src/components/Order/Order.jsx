import React from "react";
import OrderCard from "../OrderCard/OrderCard";
import OrderCardSum from "../OrderCardSum/OrderCardSum";

function Order() {

    return (
        <>
            <div className='gallery__order'>
            <OrderCard />
            <OrderCardSum/>
        </div>
        </>

    )
}

export default Order;
