import React from 'react'
import logo from '../assets/logo.svg';
function Footer() {
    return (
        <>
            <footer className="footer p-10 text-base bg-base-200">
                <div>
                    <img src={logo} alt="Joyamate logo" className='h-[100px] mx-auto' />
                    <p className='mx-auto font-bold'>2023 © | MyTinerary. All rights reserved. </p>
                    <p className='mx-auto'>Web app made with ❤ by <a href='https://www.linkedin.com/in/luca-di-marco/' className="link link-hover" target="_blank">tsu</a></p>
                </div>
                <div>
                    <h2 className="footer-title">MyTinerary</h2>
                    <p className="max-w-md">Discover your extraordinary journey, crafted by passionate insiders who intimately know and deeply adore their vibrant cities. Unveil hidden gems, indulge in authentic experiences, and embrace the allure of destinations like never before</p>
                </div>
                <div>
                    <h2 className="footer-title">Navigation</h2>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Cities</a>
                </div>
                <div>
                    <h2 className="footer-title">Contact us</h2>
                    <a className="link link-hover" href='' target="_blank">Instagram: @mytineraryfakeinsta</a>
                    <a className="link link-hover" href='mailto:' target="_blank">Email: mytinerary@fakemail.com</a>
                    <a className="link link-hover" href='' target="_blank">WhatsApp: +12 (3) 456 789-1011 </a>
                </div>

            </footer>
        </>
    )
}

export default Footer