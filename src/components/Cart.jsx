import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Cart.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className={styles.cartContainer}>
            <h2>Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className={styles.emptyMessage}>Your cart is empty.</p>
            ) : (
                <ul className={styles.cartList}>
                    {cartItems.map((item, index) => (
                        <li key={index} className={styles.cartItem}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className={styles.cartImage}
                            />
                            <div className={styles.cartDetails}>
                                <strong>{item.title}</strong>
                                <p>Rs. {item.price}</p>
                            </div>
                            <button
                                className={styles.deleteBtn}
                                onClick={() => removeFromCart(item.id)}
                            >
                                <FaTrashAlt /> Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
