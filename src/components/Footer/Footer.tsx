import { PiCoffee } from "react-icons/pi";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContacts}>
                    <div className={styles.logo}>
                        <PiCoffee className={styles.logoIcon} />
                        <p>Goodies at the table</p>
                    </div>
                    <address>
                        <ul className={styles.addressList}>
                            <li>
                                <a href="https://maps.app.goo.gl/RC8vQAbSbgY4ssQJ9" target="_blank" rel="noopener nofollow noreferrer"
                                    className={styles.addressLink}>
                                    Kyiv, st. Simon Petlyura, 1
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@goodies.com" className={styles.mailLink}>info@goodies.com</a>
                            </li>
                            <li>
                                <a href="tel:+380951111111" className={styles.telLink}>+38 095 111 11 11</a>
                            </li>
                        </ul>
                    </address>
                </div>
                <div className={styles.footerSoc}>
                    <h2 className={styles.title}>Social media:</h2>
                    <ul className={styles.footerSocList}>
                        <li>
                            <a href="https://www.instagram.com/" className={styles.footerSocLink}>
                                <FaInstagram className={styles.footerSocIcon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" className={styles.footerSocLink}>
                                <FaFacebookF className={styles.footerSocIcon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" className={styles.footerSocLink}>
                                <FaTwitter className={styles.footerSocIcon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/" className={styles.footerSocLink}>
                                <FaPinterestP className={styles.footerSocIcon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className={styles.signature}>VladZaver2023&#169;</p>
        </footer>
    )
};

export default Footer;
