import React, { useState } from 'react';
import moviesData from '../content/movies.json';

const Cart = () => {
    // Extract the movies array from the JSON data
    const moviesArray = moviesData.results;

    // Initial cart data
    const [cart, setCart] = useState([]);

    const prices = [5, 5.25, 5.5, 5.75, 5.99, 6, 6.25, 6.5, 6.75, 6.99];

    // Find movie title by ID
    const createMoviePrice = (id) => {
        const movie = moviesArray.find((movie) => movie.id === id);
        const voteINT = Number(movie.vote_average).toPrecision(1);
        return voteINT ? prices[voteINT] + '$' : 'Unknown Price';
    };

    // Find movie title by ID
    const getMovieTitle = (id) => {
        const movie = moviesArray.find((movie) => movie.id === id);
        return movie ? movie.title : 'Unknown Title';
    };

    // Handle quantity updates
    const updateQuantity = (id, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    // Handle item removal
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Add a movie to the cart
    const addMovie = (id) => {
        const movieExists = cart.some((item) => item.id === id);
        if (movieExists) {
            // Increment quantity if the movie already exists
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            // Add a new movie to the cart
            setCart((prevCart) => [...prevCart, { id, quantity: 1 }]);
        }
    };

    return (
        <div className="container checkout-page">
            <h1>Checkout</h1>
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
                            <td>{getMovieTitle(item.id)}</td>
                            <td>{item.quantity}</td>
                            <td>{createMoviePrice(item.id)}</td>
                            <td>
                                <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                                    +
                                </button>
                                <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                                    -
                                </button>
                                <button type="button" onClick={() => removeItem(item.id)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form method="POST" action="#">
                <h2>Customer Information</h2>
                <div>
                    <label htmlFor="name-checkout">Name:</label><br />
                    <input id="name-checkout" name="name" required />
                </div>
                <div>
                    <label htmlFor="address-checkout">Address:</label><br />
                    <input id="address-checkout" name="address" required />
                </div>
                <div>
                    <label htmlFor="email-checkout">Email:</label><br />
                    <input id="email-checkout" name="email" type="email" required />
                </div>
                <button type="submit">Buy Now</button>
            </form>
            {/* Example Add Movie Button */}
            <div>
                <h2>Add Movies</h2>
                {moviesArray.map((movie) => (
                    <button
                        key={movie.id}
                        onClick={() => addMovie(movie.id)}
                        style={{ margin: '5px' }}
                    >
                        Add {movie.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Cart;