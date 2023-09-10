import { useState } from 'react';

const ItineraryCard = ({ itinerary }) => {

    const [showComments, setShowComments] = useState(false);

    const handleCommentToggle = () => {
        setShowComments(!showComments);
    }

    return (
        <div className="card card-compact bg-white shadow-xl">
            <div className="card-body">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <h2 className="card-title text-xl">{itinerary.name}</h2>
                        <p className="text-gray-500 font-light">by {itinerary.user.name} - {itinerary.duration} hours</p>
                    </div>
                    <div className="avatar place-self-end object-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                                src={itinerary.user.profilePicture}
                                alt={itinerary.user.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className='col-span-3 m-4 justify-self-center'>
                        <button className='btn btn-ghost  '> 
                        View Itinerary
                        <svg viewBox="0 0 24 24"  className='w-10 h-10' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Arrow / Caret_Down_MD"> <path id="Vector" d="M16 10L12 14L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                        </button>
                    </div>
                </div>
                <div className="divider -mt-1"></div>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2'>
                        <div className="text-gray-500 flex flex-wrap mt-2">
                            {itinerary.hashtags.map((hashtag, index) => (
                                <p key={index}>#{hashtag}</p>
                            ))}
                        </div>
                    </div>
                    <div className="text-gray-700 mt-2 place-self-end">
                        <span className="mr-1">
                            {itinerary.likes} {itinerary.likes === 1 ? 'like' : 'likes'}
                        </span>
                        <span>&bull;</span>
                        <span className="ml-1">
                            {itinerary.comments.length} {itinerary.comments.length === 1 ? 'comment' : 'comments'}
                        </span>
                    </div>
                    <div className="flex mt-3 text-gray-500 col-span-2">
                        {[...Array(itinerary.price)].map((_, index) => (
                            <svg key={index} className='h-8' viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_443_3628)"> <rect x="2" y="6" width="20" height="12" stroke="currentColor" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></rect> <path d="M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z" stroke="currentColor" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z" stroke="currentColor" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z" stroke="currentColor" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z" stroke="currentColor" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10" stroke="currentColor" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 9.51733V8.5" stroke="currentColor" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 15.5173V14.5" stroke="currentColor" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_443_3628"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                        ))}
                    </div>
                    <div className='flex place-items-center justify-end mt-3 text-primary'>
                        <label className='swap'>
                            <input type="checkbox" onClick={handleCommentToggle} />
                            <svg viewBox="0 0 24 24" className='h-8 swap-off' stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11233)"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11233"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                            <svg viewBox="0 0 24 24" className='h-8 swap-on fill-primary' stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11233)"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11233"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                        </label>
                        <label className='swap'>
                            <input type="checkbox" />
                            <svg viewBox="0 0 24 24" className='h-8 swap-off' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11246)"> <path d="M19.0711 13.1421L13.4142 18.799C12.6332 19.58 11.3668 19.58 10.5858 18.799L4.92893 13.1421C2.97631 11.1895 2.97631 8.02369 4.92893 6.07107C6.88155 4.11845 10.0474 4.11845 12 6.07107C13.9526 4.11845 17.1184 4.11845 19.0711 6.07107C21.0237 8.02369 21.0237 11.1895 19.0711 13.1421Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11246"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                            <svg viewBox="0 0 24 24" className='h-8 swap-on fill-primary' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11246)"> <path d="M19.0711 13.1421L13.4142 18.799C12.6332 19.58 11.3668 19.58 10.5858 18.799L4.92893 13.1421C2.97631 11.1895 2.97631 8.02369 4.92893 6.07107C6.88155 4.11845 10.0474 4.11845 12 6.07107C13.9526 4.11845 17.1184 4.11845 19.0711 6.07107C21.0237 8.02369 21.0237 11.1895 19.0711 13.1421Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11246"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                        </label>
                    </div>
                    <div className={`col-span-3 bg-base-100 rounded-md m-3 shadow-inner overflow-hidden ${showComments ? 'p-4 opacity-100 max-h-[100rem]' : 'max-h-0 opacity-0'} transition-all duration-500`}>
                        {itinerary.comments.length === 0 ? (
                            <p className="text-gray-500 text-center">No comments yet.</p>
                        ) : (
                            itinerary.comments.map((comment, index) => (
                                <div className="chat chat-start" key={index}>
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg" alt="User Avatar" />
                                        </div>
                                    </div>
                                    <div className="chat-header">Anonymous</div>
                                    <div className="chat-bubble">{comment}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;