import './SingleTranscription.css';
import { useParams } from 'react-router-dom';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
// import { useEffect, useState } from 'react';

function SingleTranscription() {
    const { id } = useParams();
    const transcription = transcriptions.find((transcription) => transcription.id == id)
    return (
        <>
            <h1>{transcription.name}</h1>
            <h1>{transcription.tuning}</h1>
            <h1>{transcription.tuningPattern}</h1>
            <h1>{transcription.pdf}</h1>
        </>

    )
}

export default SingleTranscription