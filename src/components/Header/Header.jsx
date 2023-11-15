import { NavLink } from 'react-router-dom';
import { PiCoffee } from "react-icons/pi";
import styles from './styles.module.css';
import SearchDishes from '../SearchDishes/SearchDishes.jsx';

const Header = () => {
    return (
        <header className={[styles.header, styles.container].join(' ')}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <PiCoffee className={styles.logoIcon} />
                    <h1>Goodies at the table</h1>
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <NavLink to="/" end className={styles.navigationLink}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='dishes' className={styles.navigationLink}>
                                Dishes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='about_us' className={styles.navigationLink}>
                                About us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <SearchDishes />
            </div>
        </header>
    )
};

export default Header;


