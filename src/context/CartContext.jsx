import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const isAlreadyAdded = cartItems.some(item => item.id === product.id);

        if (isAlreadyAdded) {
            toast.warn('Item already in cart!', {
                position: 'top-right',
                autoClose: 1500,
                theme: 'colored',
            });
        } else {
            setCartItems((prev) => [...prev, product]);
            toast.success('Added to cart!', {
                position: 'top-right',
                autoClose: 1500,
                theme: 'colored',
            });
        }
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
        toast.info('Removed from cart.', {
            position: 'top-right',
            autoClose: 1500,
            theme: 'colored',
        });
    };

    const clearCart = () => {
        setCartItems([]);
        toast('Cart cleared.', {
            position: 'top-center',
            autoClose: 1500,
            theme: 'light',
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
