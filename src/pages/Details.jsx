import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaceDetails, fetchItineraries } from '../redux/placesSlice';

import ItineraryCard from '../components/ItineraryCard';


const Details = () => {
  const { placeId } = useParams();
  const dispatch = useDispatch(); 

  const placeDetails = useSelector(state => state.places.placeDetails);
  const itineraries = useSelector(state => state.places.itineraries);

  useEffect(() => {
    dispatch(fetchPlaceDetails(placeId));
    dispatch(fetchItineraries(placeId));
  }, [dispatch, placeId]);

  if (!placeDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section id="details" className="min-h-screen bg-gradient-to-b from-white to-base-100">
        <div className='h-screen'>
          <div className='grid grid-cols-3 h-full'>
            <div className='col-span-3 md:col-span-2 z-10' style={{ boxShadow: '20px -30px 30px rgba(0, 0, 0, 0.3)' }}>
              <div>
                <img src={placeDetails.image_url} alt={placeDetails.city} className='h-[60vh] w-full object-cover' />
                <div className='absolute indicator bg-white py-5 px-10 -mt-24 ml-10 rounded-md shadow-xl'>
                  {placeDetails.isPopular ? (<span className="indicator-item badge badge-secondary">Popular</span>) : null}
                  <div>
                    <h2 className='text-5xl font-semibold'>{placeDetails.city}</h2>
                    <h3 className='text-3xl font-light'>{placeDetails.country}</h3>
                  </div>
                </div>
              </div>
              <div className='p-20 my-2'>
                <p className='font-light text-lg md:text-2xl '>{placeDetails.description}</p>
              </div>
            </div>
            <iframe className='hidden md:block'
              width="100%"
              height="100%"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${placeDetails.city}, ${placeDetails.country}`
              )}&output=embed`}
            ></iframe>
          </div>
        </div>
      </section>
      <section id='itineraries' className='py-12 px-8 my-20'>
        <h2 className='text-center text-4xl font-bold'>My<span className='text-accent'>Tineraries</span></h2>
        <h3 className='text-center text-lg text-gray-600 mb-8'>Explore amazing itineraries created by users</h3>
        <div className='flex flex-col gap-4 lg:gap-12 justify-center xl:px-72'>
          {itineraries.length === 0 ? (
            <p className="text-gray-500 text-center">No itineraries available for this place. 😿</p>
          ) : (
            itineraries.map(itinerary => (
              <ItineraryCard key={itinerary._id} itinerary={itinerary} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Details;
