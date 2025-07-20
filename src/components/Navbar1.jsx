// src/components/Navbar1.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Navbar1.module.css';

export const Navbar1 = () => {
    const { cartItems } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };

    return (
        <nav className={styles.navbarCustom}>
            <div className={styles.brand}>🛍️ My Shop</div>

            <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>🔍</button>
            </form>

            <ul className={styles.navLinks}>
                <li>
                    <Link to="/cart" className={styles.navLink}>
                        🛒 Cart
                        <span className={styles.cartCount}>
                            {cartItems.length}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
