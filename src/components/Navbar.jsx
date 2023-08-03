import React, { useState, useEffect, useCallback } from 'react';
import logo from '../assets/logo.svg';

const BurgerMenu = () => {
    return (
        <div className="lg:hidden">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle hidden" />
            <label htmlFor="my-drawer-3" tabIndex={0} className="btn btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </label>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Cities</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const DesktopMenu = ({ isScrolled }) => {
    return (
        <div className="navbar-start hidden lg:flex">
            <div className="flex-none gap-2">
                <ul className={`menu menu-horizontal px-1 text-lg ${isScrolled ? 'text-black' : 'text-white'}`}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/cities'>Cities</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const Logo = ({ isScrolled }) => {
    return (
        <div className={`navbar-center transition-all ease-in-out delay-95 ${isScrolled ? '' : 'invisible'}`}>
            <a href="#" className="btn btn-ghost normal-case text-xl">
                <img src={logo} alt="MyTinerary logo" className="h-12" />
                <div>
                    <span className="text-primary">My</span>
                    <span className="text-secondary">Tinerary</span>
                </div>
            </a>
        </div>
    );
};

const ProfileMenu = ({ isLoggedIn, handleLogoutClick, handleLoginClick }) => {
    if (isLoggedIn) {
        return (
            <div className="navbar-end">
                <div className="dropdown dropdown-end z-10">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                src="https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg"
                                alt="User Avatar"
                            />
                        </div>
                    </label>
                    <ul className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href="#" className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="#">Settings</a>
                        </li>
                        <li>
                            <a href="#" onClick={handleLogoutClick}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="navbar-end">
                <button className="btn btn-secondary font-bold" onClick={handleLoginClick}>
                    Login
                </button>
            </div>
        );
    }
};

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleLoginClick = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const handleLogoutClick = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <nav
            className={`navbar bg-transparent fixed z-20 top-0 w-full ${isScrolled ? 'bg-white' : ''} transition-all ease-in-out delay-100`}
        >
            <BurgerMenu />
            <DesktopMenu isScrolled={isScrolled} />
            <Logo isScrolled={isScrolled} />
            <ProfileMenu isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} handleLoginClick={handleLoginClick} />
        </nav>
    );
};

export default Navbar;
