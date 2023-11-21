import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        // <>
        //     <a href='../../' className='cursor-pointer'>Home</a>
        //     <a href='' className='cursor-pointer'>About Me</a>
        //     <a href='' className='cursor-pointer'>Transcriptions A-Z</a>
        //     <a href='' className='cursor-pointer'>By Tuning</a>
        //     <a href='' className='cursor-pointer'>Contact Me</a>
        // </>
        <div className="flex">
            <nav className="nav-item">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </nav>
            <nav className="nav-item">
                <Link
                    to="/AboutMe"
                    className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Link>
            </nav>
            <nav className="nav-item">
                <Link
                    to="/TranscriptionsAz"
                    className={currentPage === '/TranscriptionsAz' ? 'nav-link active' : 'nav-link'}
                >
                    Transcriptions A-Z
                </Link>
            </nav>
            <nav className="nav-item">
                <Link
                    to="/ByTuning"
                    className={currentPage === '/ByTuning' ? 'nav-link active' : 'nav-link'}
                >
                    By Tuning
                </Link>
            </nav>
            <nav className="nav-item">
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </Link>
            </nav>
        </div>

    )
}

export default Navbar