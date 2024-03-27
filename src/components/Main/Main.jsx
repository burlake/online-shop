import "./Main.css";
import Error from "../Error - 404/Error";
import { headphones, wirelessHeadphones, savedHeadphones } from "../../utils/constants";
import { useEffect, useState } from "react";
import Headphones from "../Card/Card";
import WirelessHeadphones from "../WirelessHeadphones/WirelessHeadphones";
import Basket from "../OrderCard/OrderCard";
import CardList from "../CardList/CardList";
import OrderCard from "../OrderCard/OrderCard";
import OrderCardSum from "../OrderCardSum/OrderCardSum";
import Order from "../Order/Order";

function Main({ name, data, setLoggedIn }) {
  const [headphonesAll, setHeadphonesAll] = useState([]);
  const [wirelessHeadphonesAll, setWirelessHeadphonesAll] = useState([]);
  const [saveHeadphones, setSaveHeadphones] = useState([]);
  const [isCheckHeadphonesAll, setIsCheckHeadphonesAll] = useState(true);
  const [isCheckHeadphonesSave, setIsCheckHeadphonesSave] = useState(true);
  // const [savedHeadphone, setSaveHeadphone] = useState([]);

  useEffect(() => {
    setHeadphonesAll(headphones);
    setWirelessHeadphonesAll(wirelessHeadphones);
    setSaveHeadphones(headphones);
    // setSaveHeadphone(savedHeadphones);

  }, []);

  function onCheckHeadphonesAll() {
    if (isCheckHeadphonesAll) {
      setIsCheckHeadphonesAll(false);

      setHeadphonesAll(headphonesAll.filter((element) => element.price <= 40));
    } else {
      setIsCheckHeadphonesAll(true);
      setHeadphonesAll(headphones);
    }
  }


  return (
    <main className="main">
      {
        {
          error: <Error />,

          homepage: (
            <>
              <h1 className="gallery_title">Наушники</h1>
              <CardList headphones={headphonesAll} />
              <h1 className="gallery_title">Беспроводные наушники</h1>
              <WirelessHeadphones wirelessHeadphones={wirelessHeadphonesAll} />
            </>
          ),
          savedmovies: (
            <>
            <h1  className="gallery_title">Корзина</h1>
              {/* <Headphones headphones={saveHeadphones} /> */}
              <div className="order__layout">
                <OrderCard headphones={savedHeadphones} />
                <OrderCardSum />
              </div>

            </>
          ),

          // savedmovies: (
          //   <>
          //     <SearchForm
          //       isCheck={isCheckMoviesSave}
          //       changeShot={onCheckMoviesSave}
          //     />
          //     <Card movies={saveMovie} />
          //   </>
          // ),





        }[name]
      }
    </main>
  );
}

export default Main;
