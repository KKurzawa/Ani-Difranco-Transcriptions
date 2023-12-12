import './Navbar.css';

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
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex pb-2 md:pb-0 text-md md:text-xl lg:text-2xl md:items-center md:ml-10 lg:ml-40'>
                    {navlinks.map((link, index) => index > 0 && (
                        <a key={index} className='heading-text px-3 md:p-3 lg:p-5 text-center' href={link.link}>
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Navbar