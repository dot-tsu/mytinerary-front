import React from 'react';
import MainLayout from '../layouts/MainLayout';
import originalImage from '../assets/originalbg.png';
import roadCutoutImage from '../assets/roadbg.png';

function Homepage() {
    return (
        <MainLayout>
            <div className="hero min-h-screen relative overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-[-2]"
                    style={{ backgroundImage: `url(${originalImage})` }}
                ></div>

                <div className="absolute inset-0 w-full z-1">
                    <img src={roadCutoutImage} alt="Road Cutout" draggable="false" className="w-full h-full object-cover object-center pointer-events-none" />
                </div>

                {/* Hero Content */}
                <div className="hero-content text-center text-neutral-content relative -z-1 fade-in-bottom">
                    <div className="max-w-xl mx-auto">
                        <div className="mt-[-250px] animate-fadeIn">
                            <h1 className="mb-5 font-black text-5xl md:text-7xl"><span className='text-primary'>My</span><span className='text-secondary'>Tinerary</span></h1>
                            <p className="mb-5 text-sm md:text-xl font-bold text-base-100">Find your perfect trip, designed by insiders who know and love their cities.</p>
                            <button className="btn lg:btn-wide">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Homepage;
