import { NavLink } from 'react-router-dom';
import { PiCoffee } from "react-icons/pi";
import styles from './styles.module.css';
import SearchDishes from '../SearchDishes/SearchDishes.jsx';
import { useEffect, useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <header className={[styles.header, styles.container].join(' ')}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <PiCoffee className={styles.logoIcon} />
                    <h1>Goodies at the table</h1>
                </div>
                <nav className={`${styles.navigation} ${isOpen ? styles.active : ""}`}>
                    <ul>
                        <li>
                            <NavLink to="/" end className={styles.navigationLink} onClick={closeMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='dishes' className={styles.navigationLink} onClick={closeMenu}>
                                Dishes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='about_us' className={styles.navigationLink} onClick={closeMenu}>
                                About us
                            </NavLink>
                        </li>
                    </ul>
                    <SearchDishes closeMenu={closeMenu} />
                </nav>
                <button
                className={styles.headerMenuBtn}
                onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <IoClose className={styles.headerMenuIcon} />
                    ) : (
                        <HiOutlineMenu className={styles.headerMenuIcon} />
                    )}
            </button>
            </div>
        </header>
    )
};

export default Header;


