import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Home from './pages/home';
import Favorites from './pages/Favorites';
import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://63d95a015a330a6ae17a1569.mockapi.io/sneakers').then((res) => {
      setItems(res.data);
    });
    axios.get('https://63c6abdedcdc478e15c6a9d6.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://63c6abdedcdc478e15c6a9d6.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete('https://63c6abdedcdc478e15c6a9d6.mockapi.io/cart/${id}');
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://63c6abdedcdc478e15c6a9d6.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }></Route>

        <Route path="/" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
