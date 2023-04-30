import Button from '../../button/Button';
import Logo from '../Logo';
import styles from './Header.module.scss';


const Header = () => {

    return (<header className="flex items-center w-full justify-between">
        <div className={`${styles['header-left']} flex items-center`}>

            <div className={`${styles['header-left__logo']}  flex flex-nowrap items-center justify-between`}>
                <Logo />
                <div>Odyssey</div>
            </div>

            <nav class="header-left__navbar">
                <ul class="flex">
                    <li><a href="/">Tutorials</a></li>
                    <li><a href="/about">Certifications</a></li>
                </ul>
            </nav>
        </div>

        <div className="header-right">
            Log in
            <Button>
                Sign up
            </Button>
        </div>




    </header>)

}
export default Header;