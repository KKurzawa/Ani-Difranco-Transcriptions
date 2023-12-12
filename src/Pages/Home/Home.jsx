import './Home.css';
import aniPic from '../../assets/photos/anipic.png'

function Home() {
    return (
        <>
            <img src={aniPic} />
            <section>
                <p className='description-text mx-10 md:mx-40 my-10 text-center text-2xl md:text-4xl font-bold text-black'>the ultimate unauthorized fan-made and researched collection of the unique musical compositions of ani difranco
                </p>
            </section>

        </>

    )
}

export default Home