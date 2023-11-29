import './SingleTranscription.css';
import { useParams } from 'react-router-dom';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
import Animal from '../../assets/PlaceholderTranscriptions/Animal.pdf';
import { PDFViewer } from '@react-pdf/renderer';
import aniPic from '../../assets/photos/anipic.png'
// import { useEffect, useState } from 'react';

function SingleTranscription() {
    const { id } = useParams();
    const transcription = transcriptions.find((transcription) => transcription.id == id)

    const onButtonClick = () => {
        const pdfUrl = "/32Flavors.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "32Flavors.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className='flex flex-col text-4xl md:text-6xl p-5 '>
                <h1 className='text-center'>{transcription.name}</h1>
                <img src={transcription.pdf} className='w-75% border-2 border-black' />
                <div className='flex flex-start'>
                    <button className="flex-start" onClick={onButtonClick}>Download PDF</button>
                </div>


            </div>

            <PDFViewer>
                {'/32Flavors.pdf'}
            </PDFViewer>


        </>

    )
}

export default SingleTranscription