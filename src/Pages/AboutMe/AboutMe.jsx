import './AboutMe.css';
import natPic from '../../assets/photos/natPic.jpg'

function AboutMe() {
    return (
        <>
            <div className='flex justify-center mt-10'>
                <img src={natPic} />
            </div>
            <p className='font-mono mx-40 my-10 text-center text-4xl text-black'>
                I am a big fan of Ani Difranco. I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.
            </p>
        </>


    )
}

export default AboutMe