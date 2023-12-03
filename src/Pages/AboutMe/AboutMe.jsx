import './AboutMe.css';
import natPic from '../../assets/photos/natpic.jpg'

function AboutMe() {
    return (
        <>
            <div className='flex justify-center'>
                <img src={natPic} />
            </div>
            <p className='font-mono mx-10 md:mx-40 m-10 text-center text-xl md:text-2xl text-black'>
                I am a big fan of Ani Difranco. I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.
            </p>
        </>


    )
}

export default AboutMe