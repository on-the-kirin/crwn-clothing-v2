import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ShopProvider } from "./contexts/shop.context";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./contexts/cart.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </ShopProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
