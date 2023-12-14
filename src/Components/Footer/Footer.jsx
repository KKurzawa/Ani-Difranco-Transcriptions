import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='footer2 bg-[#1d110e] text-[#f2dcb3] h-32 flex flex-col'>
            <div className='footer flex justify-around items-center '>
                <a href='https://www.facebook.com/natalie.siagkrisseymour.1' target="_blank" rel="noreferrer"><FaFacebook className='text-6xl md:ml-60 lg:ml-80' /></a>
                <a href='https://anidifranco.com/' target="_blank" rel="noreferrer"><img className='w-44 -rotate-1' src='./footerLogo2.png'></img></a>
                <a href='https://www.instagram.com/natshapednat/' target="_blank" rel="noreferrer"><FaInstagram className='text-6xl md:mr-60 lg:mr-80' /></a>
            </div>
            <div>
                <a href='https://immense-everglades-74554-f9bad473782a.herokuapp.com/' target="_blank" rel="noreferrer"><h4 className='description-text flex justify-end items-end mt-2 md:mt-1 mr-2 mb-1 text-[.6rem] md:text-[.75rem]'>site designed and built by kris kurzawa</h4></a>
            </div>
        </footer>

    )
}

export default Footer