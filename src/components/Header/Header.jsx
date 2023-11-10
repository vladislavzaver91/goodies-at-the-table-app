import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { PiCoffee } from "react-icons/pi";
import styles from './styles.module.css';

const Header = ({ keywords, setKeywords }) => {
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
                <div className={styles.search}>
                    <div className={styles.searchIcon}>
                        <FaSearch />
                    </div>
                    <input
                        type="text"
                        value={keywords}
                        onChange={(evt) => setKeywords(evt.target.value)}
                        placeholder="Search for a dish"
                        className={styles.input} />
                </div>
            </div>
        </header>
    )
};

export default Header;


