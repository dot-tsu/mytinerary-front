import React, { useState } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <nav className="navbar bg-base-100">
            {/* Logo */}
            <div className="flex-1">
                <a href="#" className="btn btn-ghost normal-case text-xl">
                    My Tinerary
                </a>
            </div>

            {/* Burguer Menu */}
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Cities</a>
                    </li>
                </ul>
            </div>
            <div className="flex-none gap-2">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Cities</a>
                        </li>
                    </ul>
                </div>

                {/* Profile Menu */}
                {isLoggedIn ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src="https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg"
                                    alt="User Avatar"
                                />
                            </div>
                        </label>
                        <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
                ) : (
                    <button
                        className="btn btn-secondary font-bold"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
