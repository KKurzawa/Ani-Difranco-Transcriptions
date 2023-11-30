import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-black text-white h-48 flex flex-col'>
            <div className='footer flex justify-around items-center mb-2 '>
                <a href='https://www.facebook.com/natalie.siagkrisseymour.1' target="_blank" rel="noreferrer"><FaFacebook className='text-6xl md:ml-60 lg:ml-80' /></a>
                <a href='https://anidifranco.com/' target="_blank" rel="noreferrer"><img className='w-28 -rotate-1' src='./footerLogo.png'></img></a>
                <a href='https://www.instagram.com/natshapednat/' target="_blank" rel="noreferrer"><FaInstagram className='text-6xl md:mr-60 lg:mr-80' /></a>
            </div>
            <div>
                <a href='https://immense-everglades-74554-f9bad473782a.herokuapp.com/' target="_blank" rel="noreferrer"><h4 className='flex justify-end items-end mt-4 mr-6 mb-2 text-xs'>Site Designed and Built By Kris Kurzawa</h4></a>
            </div>
        </footer>

    )
}

export default Footer