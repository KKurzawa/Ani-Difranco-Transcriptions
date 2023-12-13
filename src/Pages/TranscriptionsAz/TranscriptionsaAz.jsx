import './TranscriptionsAz.css';
import { transcriptions } from '../../Utils/TranscriptionsTunings';

function TranscriptionsaAz() {

    return (
        <section className='flex flex-col text-white'>
            <h2 className='heading-text text-4xl md:text-6xl pt-5 text-center'>transcriptions a-z</h2>
            <h2 className='heading-text text-2xl md:text-3xl pb-5 text-center'>click song to view pdf</h2>
            <div className='md:hidden flex flex-col pb-5'>
                {transcriptions.map((transcription) => (
                    <div key={transcription.id} className='p-2 flex flex-col items-center'>
                        <a href={transcription.pdf} target="_blank" rel="noreferrer" className="description-text text-xl md:text-2xl text-white">{transcription.name}</a>
                        <div>
                            <a href='./ByTuning'>
                                <h2 className='description-text'>tuning: {transcription.tuning}</h2>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='hidden md:flex justify-evenly pb-5'>
                <div className=''>
                    {transcriptions.map((transcription) => (
                        <div key={transcription.id} className='p-2 flex flex-col items-center'>
                            <a href={transcription.pdf} target="_blank" rel="noreferrer" className="text-xl md:text-3xl text-black'">{transcription.name}</a>
                            <div>
                                <a href='./ByTuning'>
                                    <h2>tuning: {transcription.tuning}</h2>
                                </a>
                            </div>
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