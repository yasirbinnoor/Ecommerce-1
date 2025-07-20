import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../styles/Products.module.css';
import productData from '../data/product.json';
import { CartContext } from '../context/CartContext';

export const Products = () => {
    const { category, amount } = useParams();
    const { addToCart } = useContext(CartContext);

    let filteredProducts = productData;

    if (category) {
        filteredProducts = filteredProducts.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (amount) {
        const max = parseInt(amount);
        let min = 0;
        if (max === 100000) min = 0;
        else if (max === 200000) min = 100001;
        else if (max === 300000) min = 200001;
        else if (max === 400000) min = 300001;

        filteredProducts = filteredProducts.filter(
            (item) => item.price >= min && item.price <= max
        );
    }

    return (
        <div className={styles.productsContainer}>
            {filteredProducts.map((item) => (
                <div className={styles.productCard} key={item.id}>
                    <div className={styles.productImageContainer}>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className={styles.productContent}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span className={styles.productPrice}>Price: {item.price}</span>
                        <div className={styles.productButtons}>
                            <Link to={`/productdetails/${item.id}`} className={styles.viewBtn}>
                                View Details
                            </Link>
                            <button
                                className={styles.addToCartBtn}
                                onClick={() => addToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};