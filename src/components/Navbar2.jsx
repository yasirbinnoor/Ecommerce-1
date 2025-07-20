import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFilter, FaBars, FaMoon, FaSun } from 'react-icons/fa';
import styles from '../styles/Navbar2.module.css';

export const Navbar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const navItems = [
        'No Filter', 'Mobiles', 'Laptops', 'Tablets',
        '≤ 100000', '≤ 200000', '≤ 300000', '≤ 400000'
    ];

    const handleClick = (item) => {
        if (item === 'No Filter') navigate('/');
        else if (item === 'Mobiles') navigate('/category/Mobiles');
        else if (item === 'Laptops') navigate('/category/Laptop');
        else if (item === 'Tablets') navigate('/category/Tablet');
        else if (item.startsWith('≤')) {
            const range = item.replace(/[^\d]/g, '');
            navigate(`/price/${range}`);
        }
    };

    return (
        <nav className={`${styles.header2} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.topBar}>
                <button className={styles.iconBtn}><FaFilter /></button>
                <h2 className={styles.title}>Filter by</h2>

                <div className={styles.rightIcons}>
                    <button className={styles.iconBtn} onClick={toggleDarkMode}>
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                    <button className={styles.iconBtn} onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
            </div>

            <div className={`${styles.navList} ${menuOpen ? styles.show : ''}`}>
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={styles.navBtn}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </nav>
    );
};
