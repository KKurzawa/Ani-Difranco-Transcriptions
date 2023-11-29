import './ByTuning.css';
import { getTranscriptions } from '../../Utils/TranscriptionsTunings';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



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
            <h2 className='text-4xl md:text-6xl p-5 text-center'>By Tuning</h2>
            <div className='md:hidden flex flex-col'>
                <h2 className='tuningPattern'>Tuning Pattern: x55545</h2>
                <h2 className='tuning'>Tuning: EADGBE</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'EADGBE' && (
                        <Link
                            to={`/SingleTranscription/${transcription.id}`}
                            key={transcription.id}
                            className='w-10px'
                        >
                            <div className='name' key={transcription.id}>{transcription.name}</div>
                        </Link>
                    ))}
                </div>
                <h2 className='tuning'>Tuning: DGCFAD</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'DGCFAD' && (
                        <Link
                            to={`/SingleTranscription/${transcription.id}`}
                            key={transcription.id}
                            className='w-10px'
                        >
                            <div className='name' key={transcription.id}>{transcription.name}</div>
                        </Link>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x55543</h2>
                <h2 className='tuning'>Tuning: EADGBD</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'EADGBD' && (
                        <Link
                            to={`/SingleTranscription/${transcription.id}`}
                            key={transcription.id}
                            className='link'
                        >
                            <div className='name' key={transcription.id}>{transcription.name}</div>
                        </Link>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x75527</h2>
                <h2 className='tuning'>Tuning: DADGAE</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'DADGAE' && (
                        <Link
                            to={`/SingleTranscription/${transcription.id}`}
                            key={transcription.id}
                            className='link'
                        >
                            <div className='name' key={transcription.id}>{transcription.name}</div>
                        </Link>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x45523</h2>
                <h2 className='tuning'>Tuning: FADGAC</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'FADGAC' && (
                        <Link
                            to={`/SingleTranscription/${transcription.id}`}
                            key={transcription.id}
                            className='link'
                        >
                            <div className='name' key={transcription.id}>{transcription.name}</div>
                        </Link>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x75523</h2>
                <h2 className='tuning'>Tuning: DADGAC</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'DADGAC' && (
                        <Link
                            to={`/SingleTranscription/${transcription.id}`}
                            key={transcription.id}
                            className='link'
                        >
                            <div className='name' key={transcription.id}>{transcription.name}</div>
                        </Link>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x75752</h2>
                <h2 className='tuning'>Tuning: CGCGCD</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'CGCGCD' && (
                        <Link
                            to={`/SingleTranscription/${transcription.id}`}
                            key={transcription.id}
                            className='link'
                        >
                            <div className='name' key={transcription.id}>{transcription.name}</div>
                        </Link>
                    ))}
                </div>
                <h2 className='tuningPattern'>Tuning Pattern: x95550</h2>
                <h2 className='tuning'>Tuning: CADGCC</h2>
                <div className='map'>
                    {transcriptions.map((transcription) => transcription.tuning === 'CADGCC' && (
                        <Link
                            to={`/SingleTranscription/${transcription.id}`}
                            key={transcription.id}
                            className='link'
                        >
                            <div className='name' key={transcription.id}>{transcription.name}</div>
                        </Link>
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
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                                className='w-10px'
                            >
                                <div className='name' key={transcription.id}>{transcription.name}</div>
                            </Link>
                        ))}
                    </div>
                    <h2 className='tuning'>Tuning: DGCFAD</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'DGCFAD' && (
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                                className='w-10px'
                            >
                                <div className='name' key={transcription.id}>{transcription.name}</div>
                            </Link>
                        ))}
                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x45523</h2>
                    <h2 className='tuning'>Tuning: FADGAC</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'FADGAC' && (
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                                className='link'
                            >
                                <div className='name' key={transcription.id}>{transcription.name}</div>
                            </Link>
                        ))}
                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x75523</h2>
                    <h2 className='tuning'>Tuning: DADGAC</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'DADGAC' && (
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                                className='link'
                            >
                                <div className='name' key={transcription.id}>{transcription.name}</div>
                            </Link>
                        ))}
                    </div>

                </div>
                <div className='md:flex-col'>
                    <h2 className='tuningPattern'>Tuning Pattern: x55543</h2>
                    <h2 className='tuning'>Tuning: EADGBD</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'EADGBD' && (
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                                className='link'
                            >
                                <div className='name' key={transcription.id}>{transcription.name}</div>
                            </Link>
                        ))}
                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x75527</h2>
                    <h2 className='tuning'>Tuning: DADGAE</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'DADGAE' && (
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                                className='link'
                            >
                                <div className='name' key={transcription.id}>{transcription.name}</div>
                            </Link>
                        ))}

                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x75752</h2>
                    <h2 className='tuning'>Tuning: CGCGCD</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'CGCGCD' && (
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                                className='link'
                            >
                                <div className='name' key={transcription.id}>{transcription.name}</div>
                            </Link>
                        ))}
                    </div>
                    <h2 className='tuningPattern'>Tuning Pattern: x95550</h2>
                    <h2 className='tuning'>Tuning: CADGCC</h2>
                    <div className='map'>
                        {transcriptions.map((transcription) => transcription.tuning === 'CADGCC' && (
                            <Link
                                to={`/SingleTranscription/${transcription.id}`}
                                key={transcription.id}
                                className='link'
                            >
                                <div className='name' key={transcription.id}>{transcription.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

        </section>


    )
}

export default ByTuning