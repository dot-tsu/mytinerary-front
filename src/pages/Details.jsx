import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { placeId } = useParams();
  const [placeDetails, setPlaceDetails] = useState(null);

  const fetchPlaceDetails = async () => {
    try {
      const response = await axios.get(`https://mytinerary-deploy.onrender.com/api/places/${placeId}`);
      setPlaceDetails(response.data);
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  useEffect(() => {
    fetchPlaceDetails();
  }, [placeId]);

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
                {placeDetails.isPopular ? (<span class="indicator-item badge badge-secondary">Popular</span>) : null}
                <div>
                  <h2 className='text-5xl font-semibold'>{placeDetails.city}</h2>
                  <h3 className='text-3xl font-light'>{placeDetails.country}</h3>
                </div>
              </div>
            </div>
            <div className='p-20'>
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
    <section id='itineraries'>
      <h2>Under Construction</h2>
    </section>
    </>
  );
};

export default Details;
