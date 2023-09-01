import { useEffect } from 'react';
import PlaceCard from './PlaceCard.jsx';
import CardSkeleton from './CardSkeleton.jsx';

const Carousel = ({ currentSlide, setCurrentSlide, filteredPlaces }) => {
    const imagesPerSlide = 4;
    const totalSlides = Math.ceil(filteredPlaces.length / imagesPerSlide);

    const autoChangeSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(autoChangeSlide, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-8">
            {filteredPlaces.length === 0 ? (
                <>
                    <CardSkeleton key="skeleton1" />
                    <CardSkeleton key="skeleton2" />
                    <CardSkeleton key="skeleton3" />
                    <CardSkeleton key="skeleton4" />
                </>
            ) : (
                filteredPlaces
                    .slice(currentSlide * imagesPerSlide, (currentSlide + 1) * imagesPerSlide)
                    .map((place) => (
                        <PlaceCard place={place} key={place._id} />
                    ))
            )}
        </div>
    );
};

export default Carousel;
