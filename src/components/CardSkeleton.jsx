const CardSkeleton = () => {
    return (
        <div className="rounded-md h-60 w-80 md:h-80 md:w-[30rem] bg-white shadow-xl animate-pulse grid grid-cols-3 grid-rows-[auto,auto,auto,1fr,1fr,auto] gap-2 p-1 pt-4">
            <div className="h-6 bg-gray-300 rounded-3xl col-span-2 row-span-1"></div>
            <div className="h-6 w-1/2 bg-gray-300 rounded-3xl col-span-1 ml-16"></div>
            <div className="h-6 bg-gray-300 rounded-3xl col-span-1 row-span-2"></div>
            <div className="h-6 bg-white rounded-3xl col-span-3 row-span-1"></div>
            <div className="h-6 bg-white rounded-3xl col-span-3 row-span-1"></div>
            <div className="h-12 w-2/3 bg-gray-400 rounded-xl col-span-1"></div>
        </div>

    );
};

export default CardSkeleton;
