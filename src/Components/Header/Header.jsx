import './Header.css';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <>
            <div className='flex text-white bg-black'>
                <header>
                    <h1>ANI DIFRANCO</h1>
                    <h2>TRANSCRIPTIONS</h2>
                </header>
                <Navbar />
            </div>
        </>
    )
}

export default Header