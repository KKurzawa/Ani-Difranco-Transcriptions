import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className="flex flex-col md:flex-row text-white bg-[#B4A48B] justify-center width-100%">
                <header className='width-100% flex justify-center text-center'>
                    <Link
                        to="/"
                        className=''
                    >
                        <h1 className='heading-text text-6xl mt-3 md:mt-5'>ani difranco</h1>
                        <h2 className='heading-text text-4xl mb-1 md:mb-5'>transcriptions</h2>
                    </Link>
                </header>
                <Navbar />
            </nav>
        </>
    )
}

export default Header