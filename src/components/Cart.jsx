import React, { useEffect, useState } from 'react';
import moviesData from '../content/movies.json';

const Cart = () => {
    // Extract the movies array from the JSON data
    const moviesArray = moviesData.results;

    // Initial cart data
    const [cart, setCart] = useState([]);

    // On mount, pull cart data from localStorage (if any)
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);
    // Whenever cart changes, store it in localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const prices = [5, 5.25, 5.5, 5.75, 5.99, 6, 6.25, 6.5, 6.75, 6.99];

    const getNumericPrice = (id) => {
        const movie = moviesArray.find((movie) => movie.id === id);
        // Convert average to something we can index into prices[]
        const voteINT = Number(movie.vote_average).toPrecision(1);
        // Fallback to 0 if we can’t find a valid index
        if (!voteINT || !prices[voteINT]) return 0;
        return prices[voteINT];
    };

    // Return a formatted string like "5.25$"
    const createMoviePrice = (id) => {
        return `${getNumericPrice(id).toFixed(2)}$`;
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

    // Add a movie
    const addMovie = (id) => {
        const movieExists = cart.some((item) => item.id === id);
        if (movieExists) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { id, quantity: 1 }]);
        }
    };

    // Calculate grand total
    const grandTotal = cart.reduce((sum, item) => {
        const price = getNumericPrice(item.id);
        return sum + price * item.quantity;
    }, 0);

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

            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            
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