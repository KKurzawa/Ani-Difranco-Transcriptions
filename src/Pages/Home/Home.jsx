import './Home.css';
import aniPic from '../../assets/photos/anipic.png'

function Home() {
    return (
        <>
            <img src={aniPic} />
            <section>
                <p className='font-mono mx-40 my-10 text-center text-xl md:text-2xl text-black'>This is a collection of Ani Difranco transcriptions.  This is a collection of Ani Difranco transcriptions.  This is a collection of Ani Difranco transcriptions.
                    This is a collection of Ani Difranco transcriptions.  This is a collection of Ani Difranco transcriptions.  This is a collection of Ani Difranco transcriptions.  This is a collection of Ani Difranco transcriptions.
                </p>
            </section>

        </>

    )
}

export default Home