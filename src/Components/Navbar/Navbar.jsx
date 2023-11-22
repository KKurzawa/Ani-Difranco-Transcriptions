import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <div className="flex items-center">
            <nav className="nav-item p-5">
                <Link
                    to="/AboutMe"
                    className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Link>
            </nav>
            <nav className="nav-item p-5">
                <Link
                    to="/TranscriptionsAz"
                    className={currentPage === '/TranscriptionsAz' ? 'nav-link active' : 'nav-link'}
                >
                    Transcriptions A-Z
                </Link>
            </nav>
            <nav className="nav-item p-5">
                <Link
                    to="/ByTuning"
                    className={currentPage === '/ByTuning' ? 'nav-link active' : 'nav-link'}
                >
                    By Tuning
                </Link>
            </nav>
            <nav className="nav-item p-5 mr-3">
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