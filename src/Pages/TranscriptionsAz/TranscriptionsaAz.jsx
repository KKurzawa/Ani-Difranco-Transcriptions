import './TranscriptionsAz.css';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
import AniPic7 from '../../assets/photos/AniPic7.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

function TranscriptionsaAz() {
    console.log('transcriptions', transcriptions)
    const sortedTranscriptions = transcriptions.sort((function (a, b) { return a - b }));
    console.log('sortedTranscriptions', sortedTranscriptions)
    return (
        <main className='transcriptions-az flex flex-col text-xl md:text-2xl bg-[#c2b39c] border-b-[6px] border-t-[6px] border-[#a8957b]'>
            <section className='border-b-[6px] border-[#a8957b]'>
                <LazyLoadImage id='aniPic7' className='w-full' src={AniPic7} />
            </section>
            <h2 className='az-heading-text flex justify-center mt-5 mb-5'>transcriptions a-z</h2>
            <article className='flex flex-row justify-around mx-5 pb-5'>
                <section className='flex flex-col items-center'>
                    {transcriptions.map((transcription, index) => index % 2 === 0 && (
                        <section key={transcription.id} className='pb-3'>
                            <section className=' flex justify-center flex-col lg:flex-row items-center lg:items-baseline'>
                                <h2 className="az-song-text text-2xl md:text-4xl text-center lg:pr-3">{transcription.name}</h2>
                                <section className='flex items-center'>
                                    <a href={`./ByTuning/${transcription.tuning}`}>
                                        <h2 className='az-tuning-text flex hover:opacity-70'>tuning: {transcription.tuning}</h2>
                                    </a>
                                </section>
                            </section>
                            <h2 className="az-tuning-text flex justify-center hover:opacity-70">
                                {transcription.pdf === false ? (
                                    <a></a>
                                ) : (
                                    <a href={transcription.pdf} target="_blank" rel="noreferrer" className='text-center'>pdf</a>
                                )}
                                {transcription.pdf !== false && transcription.video !== false ? (
                                    <span className='text-sm md:text-lg flex items-center mr-2 ml-2'>|</span>
                                ) : (
                                    <span></span>
                                )}
                                {transcription.video === false ? (
                                    <a></a>
                                ) : (
                                    <a href={transcription.video} target='_blank' rel='noreferrer' className='text-center'>video</a>
                                )}
                            </h2>
                        </section>
                    ))}
                </section>
                <section className='flex flex-col items-center'>
                    {transcriptions.map((transcription, index) => index % 2 !== 0 && (
                        <section key={transcription.id} className='pb-3'>
                            <section className=' flex justify-center flex-col lg:flex-row items-center lg:items-baseline'>
                                <h2 className="az-song-text text-2xl md:text-4xl text-center lg:pr-3">{transcription.name}</h2>
                                <section className='flex items-center'>
                                    <a href={`./ByTuning/${transcription.tuning}`}>
                                        <h2 className='az-tuning-text flex hover:opacity-70'>tuning: {transcription.tuning}</h2>
                                    </a>
                                </section>
                            </section>
                            <h2 className="az-tuning-text flex justify-center hover:opacity-70">
                                {transcription.pdf === false ? (
                                    <a></a>
                                ) : (
                                    <a href={transcription.pdf} target="_blank" rel="noreferrer" className='text-center'>pdf</a>
                                )}
                                {transcription.pdf !== false && transcription.video !== false ? (
                                    <span className='text-sm md:text-lg flex items-center mr-2 ml-2'>|</span>
                                ) : (
                                    <span></span>
                                )}
                                {transcription.video === false ? (
                                    <a></a>
                                ) : (
                                    <a href={transcription.video} target='_blank' rel='noreferrer' className='text-center'>video</a>
                                )}
                            </h2>
                        </section>
                    ))}
                </section>
            </article>
            <footer className='pb-5 md:pb-10'>
                <a className='back-to-top text-2xl md:text-4xl flex justify-center mx-[5em] md:mx-[8em] lg:mx-[10em]' href='#'>back to top</a>
            </footer>
        </main>
    )
}

export default TranscriptionsaAz