import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section id="pageNotFound" className='text-3xl lg:text-7xl font-black text-white bg-neutral min-h-screen flex flex-col items-center justify-center'>
            🚫404 - Not found🚫
            <Link to="/">
                <button className='btn btn-accent btn-outline btn-wide m-20'>Go to home</button>
            </Link>
        </section>
    )
}

export default PageNotFound