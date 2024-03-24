import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';


function App() {
const [loggedIn, setLoggedIn] = useState(false)


  return (
    <div className="page__container">
      <Routes>

        <Route path='/' element={
          <>
            <Header />
            <Main name='homepage' />
            <Footer />
          </>
        } />

        <Route path='/saved-movies' element={
          <>
            <Header />
            <Main name='savedmovies' />
            <Footer />
          </>
        } />

        <Route path='*' element={
          <>
            <Main name='error' />
          </>
        } />

      </Routes>
    </div>
  );
}

export default App;
