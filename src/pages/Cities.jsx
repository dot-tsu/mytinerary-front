import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaces } from '../redux/placesSlice';
import CityHeader from '../components/CityHeader';
import SearchBar from '../components/Searchbar';
import PlaceCard from '../components/PlaceCard';
import CardSkeleton from '../components/CardSkeleton'

const Cities = () => {
  const dispatch = useDispatch();
  let places = useSelector(state => state.places.places);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchPlaces(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <section id="cities" className='min-h-screen'>
      <CityHeader />
      <div className='min-h-[60vh] bg-gradient-to-b from-base-0 to-base-100 pb-20'>
        <div className='flex justify-center pt-10'>
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
        <div className="flex flex-wrap justify-center items-center">
          {places.length === 0 ? (
            <div className="flex flex-wrap justify-center items-center gap-16 my-8">
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            </div>
            
          ) : (
            places.map((place) => (
                <PlaceCard place={place} key={place._id}/>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Cities;
