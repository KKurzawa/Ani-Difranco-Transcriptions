import './Tuning.css';
export default function Tuning({ myTuning, items }) {

    const songsComponents = items.map(
        (item) =>
            <article key={item.name}>
                <h2 className='by-song-title text-xl md:text-2xl'>{item.name}</h2>
                <div className='-mt-1 md:-mt-3'>
                    {item.pdf === false ? (
                        <a></a>
                    ) : (
                        <a href={item.pdf} target="_blank" rel="noreferrer" className='pdf-text text-base text-center flex-col transition duration-500 hover:ease-in-out'>pdf</a>
                    )}
                    {item.pdf !== false && item.video !== false ? (
                        <span className='span-text text-sm pr-2 pl-2'>|</span>
                    ) : (
                        <span></span>
                    )}
                    {item.video === false ? (
                        <a></a>
                    ) : (
                        <a href={item.video} target="_blank" rel="noreferrer" className='video-text text-base flex-col transition duration-500 hover:ease-in-out'>video</a>
                    )}
                </div>
            </article>
    )
    return (
        <header className=''>
            <h2 className='tuning-subheading-text text-xl md:text-3xl'>tuning: {myTuning}</h2>
            <div className='flex flex-col'>{songsComponents}</div>
        </header>
    )
}