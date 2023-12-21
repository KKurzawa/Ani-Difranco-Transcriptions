import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <footer className='footer2 bg-[#1d110e] text-[#f2dcb3] flex flex-col'>
            <div className='footer flex justify-around items-end h-20'>
                <a href='https://www.youtube.com/' target="_blank" rel="noreferrer"><FaYoutube className='mb-2 w-40 md:mb-0 text-5xl md:text-6xl md:ml-60 lg:ml-80 hover:opacity-80' /></a>
                <a href='https://www.facebook.com/natalie.siagkrisseymour.1' target="_blank" rel="noreferrer"><FaFacebook className='mb-2 md:mb-0 text-5xl md:text-6xl hover:opacity-80' /></a>
                <a href='https://anidifranco.com/' target="_blank" rel="noreferrer" className='mb-1 md:-mb-2'><img className='ani-logo w-20 md:w-28 -rotate-1 hover:opacity-80' src='./footerLogo2.png'></img></a>
                <a href='https://www.instagram.com/natshapednat/' target="_blank" rel="noreferrer"><FaInstagram className='mb-2 md:mb-0 text-5xl md:text-6xl md:mr-60 lg:mr-80 hover:opacity-80' /></a>
            </div>
            <div>
                <a href='https://immense-everglades-74554-f9bad473782a.herokuapp.com/' target="_blank" rel="noreferrer" className='w-64'><h4 className='footer-description-text flex justify-end items-end mr-2 pb-1 text-[.6em] md:text-[.85em]'>site designed and built by kris kurzawa</h4></a>
            </div>
        </footer>

    )
}

export default Footer