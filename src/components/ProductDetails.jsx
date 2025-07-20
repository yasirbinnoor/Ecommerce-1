import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../data/product.json';
import styles from '../styles/ProductDetails.module.css';
import { toast } from 'react-toastify';
import { CartContext } from '../context/CartContext'; // ✅ Add this

export const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext); // ✅ Add this

    const product = productData.find((item) => item.id.toString() === id);
    if (!product) return <h2 className={styles.notFound}>Product not found</h2>;

    const handleAddToCart = () => {
        addToCart(product); // ✅ Actually adds to cart
        toast.success(`${product.title} added to cart!`);
    };

    return (
        <div className={styles.detailsWrapper}>
            <h2 className={styles.title}>{product.title}</h2>
            <img src={product.image} alt={product.title} className={styles.image} />
            <p className={styles.description}>{product.description}</p>
            <strong className={styles.price}>Price: {product.price}</strong>
            <br />
            <button className={styles.cartBtn} onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};
