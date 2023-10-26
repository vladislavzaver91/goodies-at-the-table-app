import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContacts}>
                    <a href="" className={styles.logo}>
                        Goodies at the table
                    </a>
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
                            <a href="">
                                <svg className={styles.footerSocIcon} width="20" height="20">
                                    <use href="./images/icons.svg#instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg className={styles.footerSocIcon} width="20" height="20">
                                    <use href="./images/icons.svg#facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg className={styles.footerSocIcon} width="20" height="20">
                                    <use href="./images/icons.svg#twitter"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg className={styles.footerSocIcon} width="20" height="20">
                                    <use href=""></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
