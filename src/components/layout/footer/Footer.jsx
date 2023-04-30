import Logo from "../Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container flex flex-responsive">
                <div className="footer-left">
                    <Logo />
                    <p>
                        2023 © Odyssey. All rights reserved.
                    </p>
                </div>
                <div className={styles['footer-right']}>
                    <nav className="site">
                        <ul>
                            <li><a href="/">Tutorials</a></li>
                            <li><a href="/about">Certifications</a></li>
                        </ul>

                    </nav>
                    <nav className="social">
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Instagram</a></li>
                        </ul>
                    </nav>
                    <nav className="company">
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Terms of Use</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                        </ul>

                    </nav>
                </div>

            </div>
        </footer>
    )
}
export default Footer;