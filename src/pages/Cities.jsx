import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityHeader from '../components/CityHeader';
import SearchBar from '../components/Searchbar';
import PlaceCard from '../components/PlaceCard';

const Cities = () => {
  const [places, setPlaces] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mytinerary-deploy.onrender.com/api/places', {
        params: { query: searchQuery }
      });
      setPlaces(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="cities" className='min-h-screen'>
      <CityHeader />
      <div className='min-h-[60vh] bg-gradient-to-b from-base-0 to-base-100 pb-20'>
        <div className='flex justify-center pt-10'>
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={(e) => setSearchQuery(e.target.value)}
          fetchData={fetchData}
        />
      </div>
        <div className="flex flex-wrap justify-center items-center">
          {places.length === 0 ? (
            <p>No places found</p>
          ) : (
            places.map((place) => (
              <PlaceCard key={place._id} place={place} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Cities;
