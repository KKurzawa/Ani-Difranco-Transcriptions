import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const navlinks = [
    {
        title: 'home',
        link: '/',
    },
    {
        title: 'about',
        link: '/About',
    },
    {
        title: 'a-z',
        link: '/TranscriptionsAz',
    },
    {
        title: 'by tuning',
        link: '/ByTuning',
    },
    {
        title: 'contact me',
        link: '/Contact',
    },
]

function Navbar() {
    const currentPage = useLocation().pathname;
    return (
        <header className='flex justify-center'>
            <nav className='flex pb-2 md:pb-0 text-2xl md:text-3xl lg:text-4xl md:items-center md:ml-10 lg:ml-40'>
                {navlinks.map((link, index) => index > 0 && (
                    <Link
                        key={link.link}
                        to={link.link}
                        className={currentPage === link.link ? 'nav-link active' : 'nav-link'}
                    >
                        <nav key={index} className='heading-text px-3 md:p-3 lg:p-5 text-center text-[#4F7942] transition duration-500 hover:ease-in-out'>
                            {link.title}
                        </nav>
                    </Link>

                ))}
            </nav>
        </header>
    )
}

export default Navbar