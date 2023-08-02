import React from 'react'
import MainLayout from '../layouts/MainLayout'
function Homepage() {
    return (
        <MainLayout>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">MyTinerary</h1>
                        <p className="mb-5">Find your perfect trip, designed by insiders who know and love their cities</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Homepage