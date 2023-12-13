import './ByTuning.css';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
import TuningPattern from '../../Components/TuningPattern/TuningPattern';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';



function ByTuning() {
    let tuningPatterns = transcriptions.map(
        (transctiption) => transctiption.tuningPattern
    )

    tuningPatterns.sort(function (a, b) { return a - b });

    let uniqueTuningPatterns = [];

    for (let i = 0; i < tuningPatterns.length; i++) {
        if (!uniqueTuningPatterns.includes(tuningPatterns[i])) {
            uniqueTuningPatterns.push(tuningPatterns[i]);
        }
    }

    let tuningPatternComponents = uniqueTuningPatterns.map(
        (uniqueTuningPattern) => {
            const itemsWithTuningPattern = transcriptions.filter(
                (item) => item.tuningPattern === uniqueTuningPattern
            )
            return <TuningPattern key={uniqueTuningPattern} myTuningPattern={uniqueTuningPattern} items={itemsWithTuningPattern} />
        }
    )
    return (
        <div className='flex flex-col justify-center text-white bg-[#c2b39c]'>
            <h2 className='heading-text text-4xl md:text-6xl pt-5 text-center'>by tuning</h2>
            <h2 className='heading-text text-2xl md:text-3xl pb-5 text-center'>click song to view pdf</h2>
            <div className='md:hidden flex-col text-center'>
                {tuningPatternComponents}
            </div>
            <div className='hidden md:flex flex-col text-center'>
                {tuningPatternComponents}
            </div>

        </div>
    )
}

// return (
//     <section>

//         <h2 className='text-4xl md:text-6xl pt-5 text-center'>By Tuning</h2>
//         <h2 className='text-2xl md:text-3xl pb-5 text-center'>Click Song to View PDF</h2>
//         <div className='md:hidden flex flex-col'>
//             <h2 className='tuningPattern'>Tuning Pattern: x55545</h2>
//             <h2 id='EADGBE' className='tuning'>Tuning: EADGBE</h2>
//             <div className='map'>
//                 {transcriptions.map((transcription) => transcription.tuning === 'EADGBE' && (
//                     <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                 ))}
//             </div>
//             <h2 id='DGCFAD' className='tuning'>Tuning: DGCFAD</h2>
//             <div className='map'>
//                 {transcriptions.map((transcription) => transcription.tuning === 'DGCFAD' && (
//                     <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                 ))}
//             </div>
//             <h2 className='tuningPattern'>Tuning Pattern: x55543</h2>
//             <h2 id='EADGBD' className='tuning'>Tuning: EADGBD</h2>
//             <div className='map'>
//                 {transcriptions.map((transcription) => transcription.tuning === 'EADGBD' && (
//                     <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                 ))}
//             </div>
//             <h2 className='tuningPattern'>Tuning Pattern: x75527</h2>
//             <h2 id='DADGAE' className='tuning'>Tuning: DADGAE</h2>
//             <div className='map'>
//                 {transcriptions.map((transcription) => transcription.tuning === 'DADGAE' && (
//                     <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                 ))}
//             </div>
//             <h2 className='tuningPattern'>Tuning Pattern: x45523</h2>
//             <h2 id='FADGAC' className='tuning'>Tuning: FADGAC</h2>
//             <div className='map'>
//                 {transcriptions.map((transcription) => transcription.tuning === 'FADGAC' && (
//                     <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                 ))}
//             </div>
//             <h2 className='tuningPattern'>Tuning Pattern: x75523</h2>
//             <h2 id='DADGAC' className='tuning'>Tuning: DADGAC</h2>
//             <div className='map'>
//                 {transcriptions.map((transcription) => transcription.tuning === 'DADGAC' && (
//                     <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                 ))}
//             </div>
//             <h2 className='tuningPattern'>Tuning Pattern: x75752</h2>
//             <h2 id='CGCGCD' className='tuning'>Tuning: CGCGCD</h2>
//             <div className='map'>
//                 {transcriptions.map((transcription) => transcription.tuning === 'CGCGCD' && (
//                     <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                 ))}
//             </div>
//             <h2 className='tuningPattern'>Tuning Pattern: x95550</h2>
//             <h2 id='CADGCC' className='tuning'>Tuning: CADGCC</h2>
//             <div className='map'>
//                 {transcriptions.map((transcription) => transcription.tuning === 'CADGCC' && (
//                     <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                 ))}
//             </div>
//         </div>

//         <div className='hidden md:flex flex-row justify-around'>
//             <div className='md:flex-col'>
//                 <h2 className='tuningPattern'>Tuning Pattern: x55545</h2>
//                 <h2 className='tuning'>Tuning: EADGBE</h2>
//                 <div className='map'>
//                     {transcriptions.map((transcription) => transcription.tuning === 'EADGBE' && (
//                         <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                     ))}
//                 </div>
//                 <h2 className='tuning'>Tuning: DGCFAD</h2>
//                 <div className='map'>
//                     {transcriptions.map((transcription) => transcription.tuning === 'DGCFAD' && (
//                         <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                     ))}
//                 </div>
//                 <h2 className='tuningPattern'>Tuning Pattern: x45523</h2>
//                 <h2 className='tuning'>Tuning: FADGAC</h2>
//                 <div className='map'>
//                     {transcriptions.map((transcription) => transcription.tuning === 'FADGAC' && (
//                         <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                     ))}
//                 </div>
//                 <h2 className='tuningPattern'>Tuning Pattern: x75523</h2>
//                 <h2 className='tuning'>Tuning: DADGAC</h2>
//                 <div className='map'>
//                     {transcriptions.map((transcription) => transcription.tuning === 'DADGAC' && (
//                         <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                     ))}
//                 </div>

//             </div>
//             <div className='md:flex-col'>
//                 <h2 className='tuningPattern'>Tuning Pattern: x55543</h2>
//                 <h2 className='tuning'>Tuning: EADGBD</h2>
//                 <div className='map'>
//                     {transcriptions.map((transcription) => transcription.tuning === 'EADGBD' && (
//                         <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                     ))}
//                 </div>
//                 <h2 className='tuningPattern'>Tuning Pattern: x75527</h2>
//                 <h2 className='tuning'>Tuning: DADGAE</h2>
//                 <div className='map'>
//                     {transcriptions.map((transcription) => transcription.tuning === 'DADGAE' && (
//                         <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                     ))}

//                 </div>
//                 <h2 className='tuningPattern'>Tuning Pattern: x75752</h2>
//                 <h2 className='tuning'>Tuning: CGCGCD</h2>
//                 <div className='map'>
//                     {transcriptions.map((transcription) => transcription.tuning === 'CGCGCD' && (
//                         <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                     ))}
//                 </div>
//                 <h2 className='tuningPattern'>Tuning Pattern: x95550</h2>
//                 <h2 className='tuning'>Tuning: CADGCC</h2>
//                 <div className='map'>
//                     {transcriptions.map((transcription) => transcription.tuning === 'CADGCC' && (
//                         <a key={transcription.id} href={transcription.pdf} target="_blank" rel="noreferrer" className="name">{transcription.name}</a>
//                     ))}
//                 </div>
//             </div>

//         </div>

//     </section>


// )


export default ByTuning