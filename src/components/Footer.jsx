import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 text-base bg-base-100">
            <div className="flex flex-col items-center mb-6">
                <img src={logo} alt="Joyamate logo" className="h-[100px]" />
                <p className="mx-auto font-bold">&copy; 2023 MyTinerary. All rights reserved.</p>
                <p className="mx-auto">
                    Web app and design made with ❤ by&nbsp;
                    <a
                        href="https://www.linkedin.com/in/luca-di-marco/"
                        className="link link-hover"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Luca Di Marco
                    </a>
                </p>
            </div>
            <div className="flex flex-col mb-6">
                <h2 className="font-semibold">MyTinerary</h2>
                <p className="max-w-md">
                    Discover your extraordinary journey, crafted by passionate insiders who intimately know and deeply adore their vibrant cities. Unveil hidden
                    gems, indulge in authentic experiences, and embrace the allure of destinations like never before.
                </p>
            </div>
            <div className="flex flex-col mb-6">
                <h2 className="font-semibold">Navigation</h2>
                <Link to="/" className="link link-hover">
                    Home
                </Link>
                <Link to="/cities" className="link link-hover">
                    Cities
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="font-semibold">Contact us</h2>
                <a
                    href="https://www.instagram.com/mytineraryfakeinsta"
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram: @mytineraryfakeinsta
                </a>
                <a
                    href="mailto:mytinerary@fakemail.com"
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email: mytinerary@fakemail.com
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=1234567891011"
                    className="link link-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp: +12 (3) 456 789-1011
                </a>
            </div>
        </footer>
    );
};

export default Footer;
