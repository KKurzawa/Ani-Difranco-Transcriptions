import './Home.css';
// import aniPic from '../../assets/photos/anipic.png'
import AniPic2 from '../../assets/photos/AniPic2.png'

function Home() {
    return (
        <div className='bg-[#c2b39c]'>
            <img className='w-full' src={AniPic2} />
            <section>
                <p className='home-description-text mx-10 md:mx-40 mt-10 pb-10 text-center text-2xl md:text-4xl text-[#4F7942]'>the ultimate unauthorized fan-made and researched collection of the unique musical compositions of ani difranco
                </p>
            </section>

        </div>

    )
}

export default Home