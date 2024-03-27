import Card from '../Card/Card';

import {checkingRelevanceValueBasket, getBasketLocalStorage, setBasketLocalStorage, ShowErrorMessage} from "../../utils/ulits.js";




export default function CardList({ headphones, handleCardClick }) {
    // const headphone = (headphones || []).slice(0);

    const cards = document.querySelector('.gallery');

    document.addEventListener('DOMContentLoaded', function () {
      cards.addEventListener('click', handleCardClick);
    });
    

    function handleCardClick(event) {
      const targetButton = event.target.closest('.card__name_buy');
      console.log("targetButton", event.target.closest('.card__name_buy'));
      if (!targetButton) return;
    
      const card = targetButton.closest('.card');
      const id = card.dataset.productId;
      const basket = getBasketLocalStorage();
    
      if (basket.includes(id)) return;
    
      basket.push(id);
      setBasketLocalStorage(basket);
      checkingActiveButtons(basket);
    }
  
    function checkingActiveButtons(basket) {
      const buttons = document.querySelectorAll('.card__name_buy');
  
      buttons.forEach(btn => {
          const card = btn.closest('.card');
          const id = card.dataset.productId;
          const isInBasket = basket.includes(id);
  
          btn.disabled = isInBasket;
          btn.classList.toggle('active', isInBasket);
      });
  }

  return (
    <section className="gallery">
      <ul className="gallery" >
        {headphones.map(data => {
          return (
            <Card key={data.id} data-product-id={data.id} name={data.name} src={data.image} price={data.price} discount={data.discount} stars={data.stars}/>
          )
        })}
      </ul>
    </section>
  )
}