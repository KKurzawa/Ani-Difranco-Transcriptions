import './ByTuning.css';
import { getTranscriptions } from '../../Utils/TranscriptionsTunings';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';



function ByTuning() {
    const [transcriptions, setTranscriptions] = useState([]);

    const fetchData = async () => {
        const transcriptions = await getTranscriptions();
        setTranscriptions(transcriptions);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            {/* original approach mobile view*/}
            <h2 className='text-4xl md:text-6xl pt-5 text-center'>By Tuning</h2>
            <h2 className='text-2xl md:text-3xl pb-5 text-center'>Click Song to View PDF</h2>
            <div className='md:hidden flex flex-col'>
                <h2 className='tuningPattern'>Tuning Pattern: x55545</h2>
                <h2 id='EADGBE' className='tuning'>Tuning: EADGBE</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'EADGBE' && (
                        <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                    ))}
                </div>
                <h2 id='DGCFAD' className='tuning'>Tuning: DGCFAD</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'DGCFAD' && (
                        <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x55543</h2>
                <h2 id='EADGBD' className='tuning'>Tuning: EADGBD</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'EADGBD' && (
                        <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x75527</h2>
                <h2 id='DADGAE' className='tuning'>Tuning: DADGAE</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'DADGAE' && (
                        <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x45523</h2>
                <h2 id='FADGAC' className='tuning'>Tuning: FADGAC</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'FADGAC' && (
                        <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x75523</h2>
                <h2 id='DADGAC' className='tuning'>Tuning: DADGAC</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'DADGAC' && (
                        <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x75752</h2>
                <h2 id='CGCGCD' className='tuning'>Tuning: CGCGCD</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'CGCGCD' && (
                        <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x95550</h2>
                <h2 id='CADGCC' className='tuning'>Tuning: CADGCC</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'CADGCC' && (
                        <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                    ))}
                </div>
            </div>
            {/* medium and large */}
            <div className='hidden md:flex flex-row justify-around'>
                <div className='md:flex-col'>
                    <h2 className='tuningPattern'>Tuning Pattern: x55545</h2>
                    <h2 className='tuning'>Tuning: EADGBE</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'EADGBE' && (
                            <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                        ))}
                    </div>
                    <h2 className='tuning'>Tuning: DGCFAD</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'DGCFAD' && (
                            <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                        ))}
                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x45523</h2>
                    <h2 className='tuning'>Tuning: FADGAC</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'FADGAC' && (
                            <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                        ))}
                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x75523</h2>
                    <h2 className='tuning'>Tuning: DADGAC</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'DADGAC' && (
                            <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                        ))}
                    </div>

                </div>
                <div className='md:flex-col'>
                    <h2 className='tuningPattern'>Tuning Pattern: x55543</h2>
                    <h2 className='tuning'>Tuning: EADGBD</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'EADGBD' && (
                            <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                        ))}
                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x75527</h2>
                    <h2 className='tuning'>Tuning: DADGAE</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'DADGAE' && (
                            <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                        ))}

                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x75752</h2>
                    <h2 className='tuning'>Tuning: CGCGCD</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'CGCGCD' && (
                            <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                        ))}
                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x95550</h2>
                    <h2 className='tuning'>Tuning: CADGCC</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'CADGCC' && (
                            <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
                        ))}
                    </div>
                </div>

            </div>

        </section>


    )
}

export default ByTuning