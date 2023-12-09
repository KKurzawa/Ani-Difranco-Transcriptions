import './Home.css';
import aniPic from '../../assets/photos/anipic.png'

function Home() {
    return (
        <>
            <img src={aniPic} />
            <section>
                <p className='font-mono mx-10 md:mx-40 my-10 text-center text-xl md:text-2xl text-black'>this is a collection of ani difranco transcriptions.  this is a collection of ani difranco transcriptions.  this is a collection of ani difranco transcriptions.
                    this is a collection of ani difranco transcriptions.  this is a collection of ani difranco transcriptions.  this is a collection of ani difranco transcriptions.  this is a collection of ani difranco transcriptions.
                </p>
            </section>

        </>

    )
}

export default Home