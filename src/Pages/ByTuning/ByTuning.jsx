import './ByTuning.css';
import { transcriptions } from '../../Utils/TranscriptionsTunings';
import TuningPattern from '../../Components/TuningPattern/TuningPattern';
import AniPic8 from '../../assets/photos/AniPic8.png';
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

    return (
        <main className='flex flex-col justify-center text-xl md:text-2xl bg-[#c2b39c] border-b-[6px] border-t-[6px] border-[#a8957b]'>
            <section className='border-b-[6px] border-[#a8957b]'>
                <LazyLoadImage className='AniPic8 w-full' src={AniPic8} />
            </section>
            <h2 className='by-heading-text text-2xl md:text-10xl mt-5 mb-5 text-center'>by tuning</h2>
            <article className='md:hidden flex flex-row justify-around text-sm -mb-5'>
                <section id={oddTuningPatternComponents.tuning} className='flex-col text-center'>
                    {oddTuningPatternComponents}
                </section>
                <section className='flex-col text-center'>
                    {evenTuningPatternComponents}
                </section>
            </article>
            <article className='flex flex-row justify-around mb-10'>
                <section id={oddTuningPatternComponents.tuning} className='hidden md:flex flex-col text-center'>
                    {oddTuningPatternComponents}
                </section>
                <section className='hidden md:flex flex-col text-center'>
                    {evenTuningPatternComponents}
                </section>
            </article>
            <footer className='pb-5 md:pb-10'>
                <a className='back-to-top text-2xl md:text-4xl flex justify-center mx-[5em] md:mx-[8em] lg:mx-[10em]' href='#'>back to top</a>
            </footer>
        </main>
    )
}

export default ByTuning