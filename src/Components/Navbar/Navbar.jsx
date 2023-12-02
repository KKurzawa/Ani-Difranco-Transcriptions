import './Navbar.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navlinks = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'About Me',
        link: '/AboutMe',
    },
    {
        title: 'A-Z',
        link: '/TranscriptionsAz',
    },
    {
        title: 'By Tuning',
        link: '/ByTuning',
    },
    {
        title: 'Contact Me',
        link: '/Contact',
    },
]

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
        console.log(open);
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='flex md:text-base lg:text-xl md:items-center md:ml-10 lg:ml-40'>
                    {navlinks.map((link, index) => index > 0 && (
                        <a key={index} className='px-5 md:p-3 lg:p-5 text-center' href={link.link}>
                            {link.title}
                        </a>
                    ))}
                </div>
                {/* <div className='ml-10'>
                    <div className='flex md:hidden'>
                        <button type='button' onClick={handleMenu} className='
                        rounded-md text-white '>
                            <span className='sr-only'>Open Main Menu</span>
                            {open == true ? <FaTimes className='text-xs ml-32 mt-4' /> : <FaBars className='text-xl mt-12 -mr-10' />}
                        </button>

                    </div>

                    {open ? (
                        <div className='h-full mt-10 md:hidden'>
                            <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                                {navlinks.map((link, index) => (
                                    <a
                                        key={index}
                                        className='text-white hover:bg-gray-700
                                block px-3 py-2 rounded-md text-xs text-right'
                                        href={link.link}>
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ) : null} */}

                {/* </div> */}

            </div >
            {/* Old Code */}
            {/* < div className="hidden md:flex lg:flex md:text-base lg:text-2xl items-center md:ml-10 lg:ml-40" > */}
            {/* <div>
                    {navlinks.map((link, index) => (
                        <a key={index} className='md:p-3 lg:p-5' href={link.link}>
                            {link.title}
                        </a>
                    ))}


                </div> */}

            {/* <nav className="nav-item md:p-3 lg:p-5">
                    <Link
                        to="/AboutMe"
                        className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </Link>
                </nav>
                <nav className="nav-item md:p-3 lg:p-5">
                    <Link
                        to="/TranscriptionsAz"
                        className={currentPage === '/TranscriptionsAz' ? 'nav-link active' : 'nav-link'}
                    >
                        Transcriptions A-Z
                    </Link>
                </nav>
                <nav className="nav-item md:p-3 lg:p-5">
                    <Link
                        to="/ByTuning"
                        className={currentPage === '/ByTuning' ? 'nav-link active' : 'nav-link'}
                    >
                        By Tuning
                    </Link>
                </nav>
                <nav className="nav-item md:p-3 lg:p-5">
                    <Link
                        to="/Contact"
                        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact Me
                    </Link>
                </nav> */}
            {/* </div> */}

            {/* </div> */}
        </>

    )
}

export default Navbar