//"use strict"
//==========================================
import {useRef} from 'react';

// Вывод ошибки
export default function ShowErrorMessage(message) {
  
  const containerRef= useRef(null);

  if (containerRef.current) {
    for (let i = 0; i < 365; i++) {
      containerRef.current.insertAdjacentHTML('afterend', 
    `<div class="error">
        <p>${message}</p>
        <p><a href="/">Перейти к списку товаров!</a></p>
    </div>`);
    }
  }

  return (
    <div>
      <div className="card" ref={containerRef}></div>
    </div>
  );
};












// Получение id из LS
export function getBasketLocalStorage() {
    const cartDataJSON = localStorage.getItem('basket');
    return cartDataJSON ? JSON.parse(cartDataJSON) : [];
}

// Запись id товаров в LS
export function setBasketLocalStorage(basket) {
    const basketCount = document.querySelector('.basket__count');
    localStorage.setItem('basket', JSON.stringify(basket));
    basketCount.textContent = basket.length;
}

// Проверка, существует ли товар указанный в LS 
//(если например пару дней не заходил юзер, а товар, который у него в корзине, уже не существует)
export function checkingRelevanceValueBasket(productsData) {
    const basket = getBasketLocalStorage();

    basket.forEach((basketId, index) => {
        const existsInProducts = productsData.some(item => item.id === Number(basketId));
        if (!existsInProducts) {
            basket.splice(index, 1);
        }
    });

    setBasketLocalStorage(basket);
}