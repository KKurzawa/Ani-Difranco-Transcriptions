import './Tuning.css';
export default function Tuning({ myTuning, items }) {

    const songsComponents = items.map(
        (item) => <a href={item.pdf} target="_blank" rel="noreferrer" key={item.name} className='text-xl flex-col'>{item.name}</a>
    )

    songsComponents.sort();
    console.log(items);
    return (
        <>
            <h2 className='tuning-subheading-text text-2xl'>tuning: {myTuning}</h2>
            <div className='tuning-song-text flex flex-col'>{songsComponents}</div>
        </>
    )
}