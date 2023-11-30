import './AboutMe.css';
import natPic from '../../assets/photos/natpic.jpg'

function AboutMe() {
    return (
        <>
            <h2 className='text-4xl md:text-6xl p-5 text-center'>About Me</h2>
            <div className='flex justify-center mt-5'>
                <img src={natPic} />
            </div>
            <p className='font-mono mx-40 my-10 text-center text-xl md:text-2xl text-black'>
                I am a big fan of Ani Difranco. I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.  I am a big fan of Ani Difranco.
            </p>
        </>


    )
}

export default AboutMe