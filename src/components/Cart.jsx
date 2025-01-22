import React, { useEffect, useState } from "react";
import moviesData from "../content/movies.json";

const Cart = () => {
  const moviesArray = moviesData.results;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }, [cart]);

  const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
    }
  };

  const prices = [5, 5.25, 5.5, 5.75, 5.99, 6, 6.25, 6.5, 6.75, 6.99];

  const getNumericPrice = (id) => {
    const movie = moviesArray.find((movie) => movie.id === id);

    if (!movie || typeof movie.vote_average === "undefined") {
      return 0;
    }

    const voteINT = Number(movie.vote_average).toPrecision(1);
    return prices[voteINT] || 0;
  };

  const createMoviePrice = (id) => {
    return `${getNumericPrice(id).toFixed(2)}$`;
  };

  const getMovieTitle = (id) => {
    const movie = moviesArray.find((movie) => movie.id === id);
    return movie ? movie.title : "Unknown Title";
  };

  const getMovieImage = (id) => {
    const movie = moviesArray.find((movie) => movie.id === id);
    const imgUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    return imgUrl;
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item))
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const grandTotal = cart.reduce((sum, item) => {
    const price = getNumericPrice(item.id);
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="container checkout-page">
      <h1 id="checkoutMainTitle">Checkout</h1>
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <a href={`/movie/info/${item.id}`}>
                  <div className="movie-info">
                    <img src={getMovieImage(item.id)} alt="img" />
                    <span>{getMovieTitle(item.id)}</span>
                  </div>
                </a>
              </td>
              <td>
                <div className="quantity-container">
                  <div className="quantity-buttons">
                    <button type="button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  </div>
                </div>
              </td>
              <td>
                <div className="price-container">
                  <span className="unit-price">{createMoviePrice(item.id)}</span>
                  <span className="total-price">
                    Total: ${(getNumericPrice(item.id) * item.quantity).toFixed(2)}
                  </span>
                </div>
              </td>
              <td>
                <div className="remove-button-container">
                  <button type="button" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 id="grandTotalTitle">Grand Total: ${grandTotal.toFixed(2)}</h3>

      <form method="POST" action="#">
        <h2>Customer Information</h2>
        <div>
          <label htmlFor="name-checkout">Name:</label>
          <br />
          <input id="name-checkout" name="name" required />
        </div>
        <div>
          <label htmlFor="address-checkout">Address:</label>
          <br />
          <input id="address-checkout" name="address" required />
        </div>
        <div>
          <label htmlFor="email-checkout">Email:</label>
          <br />
          <input id="email-checkout" name="email" type="email" required />
        </div>
        <button type="submit">Buy Now</button>
      </form>
    </div>
  );
};

export default Cart;
