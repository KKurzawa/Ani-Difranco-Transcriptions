import './Tuning.css';
export default function Tuning({ myTuning, items }) {

    const songsComponents = items.map(
        (item) =>
            <div key={item.name}>
                <h2 className='by-song-title text-xl md:text-2xl'>{item.name}</h2>
                <div className='-mt-1'>
                    <a href={item.pdf} target="_blank" rel="noreferrer" className='pdf-text text-base flex-col pr-1'>PDF</a>
                    <span className='span-text text-sm'>|</span>
                    <a href={item.video} target="_blank" rel="noreferrer" className='video-text text-base flex-col pl-1'>Video</a>
                </div>

            </div>
    )

    songsComponents.sort();
    console.log('songsComponents', songsComponents);
    return (
        <div className=''>
            <h2 className='tuning-subheading-text text-xl md:text-3xl'>tuning: {myTuning}</h2>
            <div className='flex flex-col'>{songsComponents}</div>
        </div>
    )
}