
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/navbar"
import { appRoutes } from './router';
import { Suspense, useRef, useState } from 'react';


function App() {
  const cartInitialState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: []
  }
  const categoryRef = useRef(null)
  const [cartItems, setCartItems] = useState(cartInitialState)
  const [user , setUser] = useState(null)
  const [isLogged , setIsLogged] = useState(false)


  return (
    <div>
      <NavBar
        categoryRef={categoryRef}
        cartItemsCount={cartItems.numberOfItems}
        isLogged={isLogged}
      />
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {appRoutes.map(route => {
        if (route.requiresAuth && !isLogged) {
          return <Route key={route.path}
          path={route.path}  element={<Navigate replace to={'/login'} />} />
        } else {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.component
                  categoryRef={categoryRef}
                  _cartItems={cartItems}
                  setCartItems={setCartItems}
                  setUser={setUser}
                  setIsLogged={setIsLogged}
                  user={user}
                />
              }
            />
          );
        }
          
        })}
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
