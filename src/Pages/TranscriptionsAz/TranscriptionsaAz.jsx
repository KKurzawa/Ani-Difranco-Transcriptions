import './TranscriptionsAz.css';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
import AniPic3 from '../../assets/photos/AniPic3.png';
import AniPic4 from '../../assets/photos/AniPic4.png'

function TranscriptionsaAz() {
    console.log('transcriptions', transcriptions)
    const sortedTranscriptions = transcriptions.sort((function (a, b) { return a - b }));
    console.log('sortedTranscriptions', sortedTranscriptions)
    return (
        <section className='transcriptions-az flex flex-col text-xl md:text-2xl bg-[#c2b39c]'>
            <img id='aniPic4' className='w-full' src={AniPic4} />
            <h2 className='az-heading-text flex justify-center mt-5 mb-5'>transcriptions a-z</h2>
            {/* <h2 className='az-subheading-text flex justify-center'>click song to view pdf</h2> */}
            {/* <div className='md:hidden flex flex-col pb-5'>
                {transcriptions.map((transcription) => (
                    <div key={transcription.id} className='p-2 flex flex-col items-center'>
                        <a href={transcription.pdf} target="_blank" rel="noreferrer" className="description-text text-xl md:text-2xl text-[#412720]">{transcription.name}</a>
                        <div>
                            <a href='./ByTuning'>
                                <h2 className='description-text'>tuning: {transcription.tuning}</h2>
                            </a>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className='flex flex-row justify-around mx-5 pb-10'>
                <div className='flex flex-col items-center'>
                    {transcriptions.map((transcription, index) => index % 2 === 0 && (
                        <div key={transcription.id} className='pb-3'>
                            <div className=' flex justify-center flex-col lg:flex-row items-center lg:items-baseline'>
                                <h2 className="az-song-text text-2xl md:text-4xl text-center lg:pr-3">{transcription.name}</h2>
                                <div className='flex items-center'>
                                    <a href='./ByTuning'>
                                        <h2 className='az-tuning-text flex hover:opacity-70'>tuning: {transcription.tuning}</h2>
                                    </a>
                                </div>
                            </div>
                            <h2 className="az-tuning-text flex justify-center hover:opacity-70"><a href={transcription.pdf} target="_blank" rel="noreferrer" className='mr-1'>pdf</a><span>|</span><a href={transcription.video} target='_blank' rel='noreferrer' className='ml-1'>video</a></h2>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center'>
                    {transcriptions.map((transcription, index) => index % 2 !== 0 && (
                        <div key={transcription.id} className='pb-3'>
                            <div className=' flex justify-center flex-col lg:flex-row items-center lg:items-baseline'>
                                <h2 className="az-song-text text-2xl md:text-4xl text-center lg:pr-3 hover:opacity-70">{transcription.name}</h2>
                                <div className='flex items-center'>
                                    <a href='./ByTuning'>
                                        <h2 className='az-tuning-text flex hover:opacity-70'>tuning: {transcription.tuning}</h2>
                                    </a>
                                </div>
                            </div>
                            <h2 className="az-tuning-text flex justify-center hover:opacity-70"><a href={transcription.pdf} target="_blank" rel="noreferrer" className='mr-1'>pdf</a><span>|</span><a href={transcription.video} target='_blank' rel='noreferrer' className='ml-1'>video</a></h2>
                        </div>
                    ))}
                </div>
                {/* <div>
                    {transcriptions.map((transcription, index) => index % 2 === 1 && (
                        <div key={transcription.id} className='p-2 flex flex-col items-center'>
                            <a href={transcription.pdf} target="_blank" rel="noreferrer" className="text-5xl">{transcription.name}</a>
                            <div>
                                <a href='./ByTuning'>
                                    <h2 className='text-2xl'>Tuning: {transcription.tuning}</h2>
                                </a>
                            </div>
                        </div>


                    ))}
                </div> */}

            </div>

        </section>

    )
}

export default TranscriptionsaAz