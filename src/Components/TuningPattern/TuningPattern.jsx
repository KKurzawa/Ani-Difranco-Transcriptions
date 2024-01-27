import Tuning from "../Tuning/Tuning";
import './TuningPattern.css';


export default function TuningPattern({ myTuningPattern, items }) {
    let tunings = items.map(
        (item) => item.tuning
    )

    tunings.sort();

    console.log('TuningPatternsItems', items)
    let uniqueTunings = [];
    for (let i = 0; i < tunings.length; i++) {
        if (!uniqueTunings.includes(tunings[i])) {
            uniqueTunings.push(tunings[i])
        }
    }

    let tuningComponents = uniqueTunings.map(
        (uniqueTuning) => {
            const itemsWithTuning = items.filter(
                (item) => item.tuning === uniqueTuning
            )
            return <Tuning key={uniqueTuning} myTuning={uniqueTuning} items={itemsWithTuning} />
        }
    )
    return (
        <header className="flex-col pb-3">
            <h2 className="tuning-pattern-text text-2xl md:text-4xl md:pb-2">tuning pattern: x{myTuningPattern}</h2>
            {tuningComponents}
        </header>
    )

}