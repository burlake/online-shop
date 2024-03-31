import { useState } from 'react';
import './header.css'
import { Link } from "react-router-dom";


export default function Header(count) {
  const [ setIsOpen] = useState(false)

  const cartNum = document.querySelector("#cart_num");

  function clickLink() {
    setIsOpen(false)
  }

  return (
    <header className={`header page__header`}>
      <div>
        <Link to={'/'} className="header__link-home"></Link>
      </div>
      <>
        <nav>
          <ul className='header__links-container '>
            <li className='header__links-container_position'>
              <Link
                to={'/saved-cards'}
                className={`header__like`}
                onClick={clickLink}
              >
                <div className='header_active-amount'></div>
                <span className='header_active-amount_number'>2</span>
              </Link>
              
                
            </li>
            <button className='header__links-container_position cart'>
              <Link
                to={'/saved-cards'}
                className={`header__basket`}
                onClick={clickLink}
              >
                <div className='header_active-amount'></div>
                <span className='header_active-amount_number basket__count' id="cart_num"
                >0</span>
              </Link>

            </button>
          </ul>
        </nav>
      </>
    </header>
  )
}
