import './Home.css';
import AniPic2 from '../../assets/photos/AniPic2.png';

function Home() {
    return (
        <div className='bg-[#c2b39c]'>
            <img className='w-full' src={AniPic2} />
            <section>
                <p className='home-description-text mx-10 md:mx-40 mt-10 text-center pb-1 text-2xl md:text-4xl  text-[#412720]'>the ultimate unauthorized fan-made and researched collection of the unique musical compositions of
                </p>
                <div className='home-ad text-[#4F7942] text-center pb-10 text-2xl md:text-4xl'>ani difranco</div>
            </section>

        </div>
    )
}

export default Home