import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { fetchHeaderData} from '../redux/placesSlice'

const CityHeader = () => {
  const dispatch = useDispatch(); 

  const headerPlaces = useSelector(state => state.places.headerPlaces);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    dispatch(fetchHeaderData());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentImageIndex(() => Math.floor(Math.random() * headerPlaces.length));
        setIsChanging(false);
      }, 300);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [headerPlaces]);

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[40vh] bg-fixed bg-cover bg-bottom" style={{ backgroundImage: headerPlaces.length === 0 ? "" : `url('${headerPlaces[currentImageIndex].image_url}')` }}>
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isChanging ? "opacity-75" : "opacity-50"}`}></div>
      <h1 className='text-white text-5xl md:text-7xl font-bold relative z-10'>Cities</h1>
      <h3 className='text-white md:text-xl font-light m-3 relative z-10'>
        <span className='font-bold text-accent'>Explore</span> the world and discover the best places to visit.
      </h3>
    </div>
  );
}

export default CityHeader;