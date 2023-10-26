import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Header = ({ keywords, setKeywords }) => {
    return (
        <header className={[styles.header, styles.container].join(' ')}>
            <div className={styles.wrapper}>
                <h1>Goodies at the table</h1>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <NavLink to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='recipes'>Recipes</NavLink>
                        </li>
                        <li>
                            <NavLink to='about_us'>About us</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles.search}>
                    <input
                        type="text"
                        value={keywords}
                        onChange={(evt) => setKeywords(evt.target.value)}
                        placeholder="Search for a recipe"
                        className={styles.input} />
                </div>
            </div>
        </header>
    )
};

export default Header;
