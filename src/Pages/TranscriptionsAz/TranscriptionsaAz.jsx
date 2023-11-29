import './TranscriptionsAz.css';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function TranscriptionsaAz() {

    // const [transcriptions, setTranscriptions] = useState([]);

    // const fetchData = async () => {
    //     const transcriptions = await getTranscriptions();
    //     setTranscriptions(transcriptions);
    //     // const data = (transcriptions);
    //     // console.log(data)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // if (!id) {
    //     id = "id";
    // }



    return (
        <section className='flex flex-col'>
            <h2 className='text-4xl md:text-6xl p-5 text-center'>Transcriptions A-Z</h2>
            <div className='md:hidden flex flex-col pb-5'>
                {transcriptions.map((transcription) => (
                    <div key={transcription.id} className='p-2 flex flex-col items-center'>
                        <Link
                            key={transcription.id}
                            to={`/SingleTranscription/${transcription.id}`}

                        >
                            <div key={transcription.id}>
                                <h2 className='text-3xl'>{transcription.name}</h2>
                            </div>
                        </Link>
                        <div>
                            <a href='./ByTuning'>
                                <h2>Tuning: {transcription.tuning}</h2>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='hidden md:flex justify-evenly pb-5'>
                <div className=''>
                    {transcriptions.map((transcription, index) => index % 2 === 0 && (
                        <div key={transcription.id} className='p-2 flex flex-col items-center'>
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                            >
                                <div key={transcription.id}>
                                    <h3 className='text-5xl'>{transcription.name}</h3>
                                </div>
                            </Link>
                            <div>
                                <a href='./ByTuning'>
                                    <h2>Tuning: {transcription.tuning}</h2>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {transcriptions.map((transcription, index) => index % 2 === 1 && (
                        <div key={transcription.id} className='p-2 flex flex-col items-center'>
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                            >
                                <div key={transcription.id}>
                                    <h3 className='text-5xl'>{transcription.name}</h3>
                                </div>
                            </Link>
                            <div>
                                <a href='./ByTuning'>
                                    <h2>Tuning: {transcription.tuning}</h2>
                                </a>
                            </div>
                        </div>


                    ))}
                </div>

            </div>

        </section>

    )
}

export default TranscriptionsaAz