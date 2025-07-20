

import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../styles/SearchItem.module.css';
import productData from '../data/product.json';
import { CartContext } from '../context/CartContext';

export const SearchItem = () => {
    const { term } = useParams();
    const { addToCart } = useContext(CartContext);

    const results = productData.filter(item =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
    );

    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.resultTitle}>
                Search Results for <span className={styles.highlight}>
                    "{term}"
                </span>
            </h2>
            <div className={styles.grid}>
                {results.length > 0 ? results.map(item => (
                    <div className={styles.card} key={item.id}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={styles.image}
                        />
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                        <strong className={styles.price}>Price: {item.price}</strong>
                        <div className={styles.buttonGroup}>
                            <Link to={`/productdetails/${item.id}`} className={styles.viewBtn}>
                                View Details
                            </Link>
                            <button
                                className={styles.cartBtn}
                                onClick={() => addToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )) : (
                    <p className={styles.notFound}>No products found.</p>
                )}
            </div>
        </div>
    );
};
