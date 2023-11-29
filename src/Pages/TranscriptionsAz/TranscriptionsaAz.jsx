import './TranscriptionsAz.css';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';


function TranscriptionsaAz() {

    // let pdf = transcriptions.pdf;
    // console.log(pdf);

    // const [transcriptionsData, setTranscriptionsData] = useState([]);



    // const onButtonClick = () => {
    //     const pdfUrl = transcriptionsData.pdf;
    //     const link = document.createElement("a");
    //     link.href = pdfUrl;
    //     link.download = transcriptionsData.pdf;
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //     console.log(transcriptionsData.pdf)
    //     setTranscriptionsData('');
    // };
    return (
        <section className='flex flex-col'>
            <h2 className='text-4xl md:text-6xl pt-5 text-center'>Transcriptions A-Z</h2>
            <h2 className='text-2xl md:text-3xl pb-5 text-center'>Click Song to View PDF</h2>
            <div className='md:hidden flex flex-col pb-5'>
                {transcriptions.map((transcription) => (
                    <div key={transcription.id} className='p-2 flex flex-col items-center'>
                        <a href={transcription.pdf} target="_blank" rel="noreferrer" className="text-3xl">{transcription.name}</a>
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
                            <a href={transcription.pdf} target="_blank" rel="noreferrer" className="text-5xl">{transcription.name}</a>
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
                            <a href={transcription.pdf} target="_blank" rel="noreferrer" className="text-5xl">{transcription.name}</a>
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