import './ByTuning.css';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
import TuningPattern from '../../Components/TuningPattern/TuningPattern';
import AniPic5 from '../../assets/photos/AniPic5.png';
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    const oddTuningPatternComponents = tuningPatternComponents.filter((tuningPatternComponent, index) => {
        return index % 2 === 0;
    });

    const evenTuningPatternComponents = tuningPatternComponents.filter((tuningPatternComponent, index) => {
        return index % 2 !== 0;
    });

    console.log(oddTuningPatternComponents);

    console.log('tuningPatternComponents', tuningPatternComponents);
    // console.log('oddTuningPatterns', oddTuningPatterns);
    return (
        <div className='flex flex-col justify-center text-xl md:text-2xl bg-[#c2b39c]'>
            <LazyLoadImage className='AniPic5 w-full' src={AniPic5} />
            <h2 className='by-heading-text text-2xl md:text-10xl mt-5 mb-5 text-center'>by tuning</h2>
            <div className='md:hidden flex flex-row justify-around text-sm'>
                <div id={oddTuningPatternComponents.tuning} className='flex-col text-center'>
                    {oddTuningPatternComponents}
                </div>
                <div className='flex-col text-center'>
                    {evenTuningPatternComponents}
                </div>
            </div>
            <div className='flex flex-row justify-around mb-10'>
                <div id={oddTuningPatternComponents.tuning} className='hidden md:flex flex-col text-center'>
                    {oddTuningPatternComponents}
                </div>
                <div className='hidden md:flex flex-col text-center'>
                    {evenTuningPatternComponents}
                </div>
            </div>
        </div>
    )
}

export default ByTuning