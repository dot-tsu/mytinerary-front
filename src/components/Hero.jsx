import React from 'react'
import originalImage from '../assets/originalbg.jpg';
import cuttedImage from '../assets/cuttedbg.png';

function Hero() {
    return (
        <div className="hero min-h-screen relative overflow-hidden flex">
            {/* Parallax background */}
            <img
                src={originalImage}
                alt="Person in landscape"
                draggable="false"
                className="w-full h-full object-cover object-center pointer-events-none -z-50 fixed brightness-50"
            />

            {/* SVG Shape */}
            <svg
                className="absolute bottom-0 left-0 w-full text-white -z-40"
                viewBox="0 0 720 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="white"
                    d="M0,128 C60,192 180,320 360,320 C540,320 660,192 720,128 L720,320 L0,320Z"
                ></path>
            </svg>

            {/* Hero Content */}
            <div className="hero-content h-full z-10 flex flex-col w-4/5 md:w-3/5 text-white">
                <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold">
                    My<span className="">Tinerary</span>
                </h1>
                <p className="text-sm xl:text-xl font-thin md:mx-10">
                    Find your perfect trip, designed by insiders who know and love their cities.
                </p>
                <button className="btn btn-outline border-white text-white md:btn-wide">
                    Get Started
                </button>
            </div>

            {/* Person Cutout */}
            <img
                src={cuttedImage}
                alt="Person Cutout"
                draggable="false"
                className="inset w-full h-full object-cover object-center pointer-events-none fixed -z-30 brightness-50"
            />
        </div>
    )
}

export default Hero