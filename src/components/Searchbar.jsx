import React from 'react';

const SearchBar = ({ searchQuery, onSearchQueryChange, fetchData }) => (
    <label className="flex">
        <input
            type="text"
            placeholder="Search your city"
            className="p-2 border rounded-l-lg text-2xl font-light"
            value={searchQuery}
            onChange={onSearchQueryChange}
            onKeyUp={(e) => {
                if (e.key === 'Enter') {
                    fetchData();
                }
            }}
        />
        <button className='bg-secondary rounded-r-lg hover:bg-secondary-focus transition-colors' onClick={fetchData}>
            <div className='w-10'>
                <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z" stroke="#ffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17.029 16.5295L19.5 19.0005" stroke="#ffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
        </button>
    </label>
);

export default SearchBar;