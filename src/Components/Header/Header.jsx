import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;
    return (
        <>
            <nav className="flex text-white bg-black justify-center width-100%">
                <header className='width-100% flex text-center'>
                    <Link
                        to="/"
                        className=''
                    >
                        <h1 className='text-5xl mt-6'>ANI DIFRANCO</h1>
                        <h2 className='text-3xl mb-6'>TRANSCRIPTIONS</h2>
                    </Link>
                </header>
                <Navbar />
            </nav>
        </>
    )
}

export default Header