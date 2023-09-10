import { Link } from 'react-router-dom';
const PlaceCard = ({ place }) => (
    
    <div className='shadow-xl shadow-gray-500'>
        <div key={place._id}>
            <div className="relative group">
                <img
                    src={place.image_url}
                    alt={place.city + ", " + place.country}
                    className="h-60 w-80 md:h-80 md:w-[30rem] object-cover transition-all brightness-50 group-hover:brightness-100 rounded-sm"
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
                <Link to={`/cities/${place._id}`} key={place._id}>
                    <button className='btn text-white btn-outline btn-md btn-rounded'>View More</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default PlaceCard;