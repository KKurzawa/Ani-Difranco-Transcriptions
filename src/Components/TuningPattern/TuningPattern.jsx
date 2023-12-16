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
        <div className="flex-col pb-3">
            <h2 className="tuning-pattern-text text-sm md:text-10xl pb-2 md:pb-4">tuning pattern: x{myTuningPattern}</h2>
            {tuningComponents}
        </div>
    )

}