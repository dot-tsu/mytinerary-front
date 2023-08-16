import React, { useState, useEffect }from 'react';
import places from '../data/data.json';

function Cities() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isChanging, setIsChanging]  = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsChanging(true);
            const id = setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % places.length);
                setIsChanging(false);
            }, 300);
            setTimeoutId(id);
        }, 8000); // 8 seconds
        
        return () => {
            clearInterval(interval);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    return (
        <>
            <section id="cities" className='min-h-screen'>
                <div className="relative flex flex-col justify-center items-center min-h-[40vh] bg-cover bg-center" style={{ backgroundImage: `url('${places[currentImageIndex].image_url}')` }}>
                    <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isChanging ? "opacity-75" : "opacity-50"}`}></div>
                    <h1 className='text-white text-4xl font-bold relative z-10'>Cities</h1>
                    <h3 className='text-white md:text-xl font-light m-3 relative z-10'>
                        <span className='font-bold'>Explore</span> the world and discover the best places to visit.
                    </h3>
                </div>
                <div className='min-h-[60vh] bg-gradient-to-b from-base-300 to-base-100 pb-20'>
                    <div className="flex justify-center py-10">
                        <input type="text" placeholder="Search your city" className="input input-bordered w-full max-w-lg mx-5" />
                    </div>
                    <div className="flex flex-wrap justify-center items-center">
                        {places.map((place) => (
                            <div key={place.id} className='m-4'>
                                <a className="relative group">
                                    <img
                                        src={place.image_url}
                                        alt={place.city + ", " + place.country}
                                        className="h-60 w-80 md:h-80 md:w-[30rem] object-cover rounded-md transition-all brightness-50 group-hover:brightness-100"
                                    />
                                    <div className="absolute top-0 left-0 p-2 text-white">
                                        <h3 className="text-lg md:text-2xl font-semibold">{place.city}</h3>
                                        <div className='flex places-center'>
                                            <svg className="h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </g>
                                            </svg>
                                            <h4 className="text-xs md:text-sm">{place.country}</h4>
                                        </div>
                                    </div>
                                    {place.isPopular ? (
                                        <div className="absolute top-0 right-0 p-2 text-white">
                                            <div className="badge badge-outline">Popular</div>
                                        </div>
                                    ) : null}
                                     <div className="absolute bottom-0 left-0 p-2 text-white">
                                            <button className='btn text-white btn-outline btn-md btn-rounded'>View More</button>
                                        </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cities;
