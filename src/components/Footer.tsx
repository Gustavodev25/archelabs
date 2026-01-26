import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} alt="ArcheLabs" className="footer-logo" />
                </div>

                <div className="footer-center">
                    <span>&copy; {new Date().getFullYear()} ArcheLabs. Todos os direitos reservados.</span>
                </div>

                <div className="footer-right">
                    <div className="footer-origin">
                        <span>Criado com</span>
                        <span className="footer-heart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                        </span>
                        <span>no Brasil</span>
                        <span className="footer-flag" role="img" aria-label="Brasil">🇧🇷</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
