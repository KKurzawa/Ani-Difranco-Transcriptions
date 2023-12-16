import './About.css';
// import natPic from '../../assets/photos/natpic.jpg'
import NatPic3 from '../../assets/photos/NatPic3.png'
import DynamicsTable from '../../Components/DynamicsTable/DynamicsTable';

function AboutMe() {
    // const backslash = &amp#92;

    return (
        <div className='bg-[#c2b39c]'>
            <div className='flex justify-center'>
                <img id='NatPic3' src={NatPic3} />
            </div>
            <p className='mt-10 pb-10 mx-7 md:mx-10 text-xl md:text-2xl'>
                <h2 id='introduction' className='about-header-text'>introduction</h2>
                <h3 id='nat-name' className='about-description-text'>natalie siagkris-seymour</h3>

                <h4 className='about-description-text'>
                    when i first encountered the music of ani difranco, i had been playing guitar for nearly twenty years. as a long-time student and enthusiast of the music of joni mitchell, i was elated to find another artist with such a penchant for innovative and expressive tunings. though less frequently cataloged and analyzed than many of her musical peers, ani is every bit as creative and unique as the guitar greats often topping patriarchal-good-ol-boys-club best of lists; she is even more so unparalleled when one takes her right hand fingerpicking technique into consideration.
                </h4>
                <h4 className='about-description-text mb-10'>
                    being a completionist and enormous nerd at heart, i took it upon myself to decipher and transcribe each one of ani’s nearly 300 songs. armed with a cursory knowledge of her compositional style and an enormous fan-compiled database of bootleg recordings, i was able to determine what i consider to be as close to, if not exactly accurate transcriptions of ani’s guitar parts on her songs. over the years of live performance, many of these songs have changed– fuel began on the tenor guitar, and is now played in E standard on her baritone; swan dive’s high string has dropped from an E to a C— and this collection aims to present them all, in each iteration.
                </h4>
                <h2 className='about-header-text'>
                    what is tab? what are transcriptions?
                </h2>

                <h4 className='about-description-text'>
                    tab (tablature) is a system of writing and reading music for string instruments. as many guitar players seem to have a severe allergy to traditional sheet music, it is often preferable and best thought of as a 3d diagram for the fretting hand. each line of a tab corresponds to a string on the guitar, with the lowest string on the bottom of the tab. this means that the string nearest the top of the guitar, often with the lowest pitch, is represented by the bottom line of the tab, and the strings ascend from there. the numbers listed on a tab correspond to which fret the note is to be played on, and certain dynamic markers may be included to give direction, such as hammer ons, pull offs, slides, etc. a list of tab symbols can be found below.
                </h4>

                <h4 className='about-description-text'>
                    tab will also provide some indication as to rhythm and timing of the notes, though it as a medium conveys less rhythmic information than traditional sheet music. individual notes will be spaced out to indicate that they are to be played separately, while chords are represented by numbers on the same vertical axis.
                </h4>

                <h4 className='about-description-text'>
                    in order to keep the number of characters in a tab, transcription, or tuning pattern consistent and simple, frets higher than 9 are numbered alphabetically as follows:
                </h4>
                <ul className='about-description-text list-disc list-inside'>
                    <li>10th fret, A</li>
                    <li>11th fret, B</li>
                    <li>12th fret, C</li>
                    <li>13th fret, D</li>
                    <li>14th fret, E</li>
                    <li>15th fret, F</li>
                </ul>
                <div id='this-way' className='about-description-text mb-10'>
                    this way, the number 10 does not read as a possible 1 0, and can be easily identified by a single character.
                </div>
                <div className='about-header-text'>tips for playing ani</div>
                <div className='about-sub-header-text'>tuning notation</div>
                <div className='about-description-text'>
                    again inspired by joni mitchell, i have adapted her system of noting tunings. rather than list each tuning by pitch, the tunings are instead listed by the fret below to which you would tune the string by ear. for example:
                </div>

                <ul className='about-description-text list-disc list-inside'>
                    <li>in standard tuning, begin with the low e string, the 6th string.</li>
                    <li>hold the 6th string at the 5th fret, and tune the 5th string to this note, which is an A.</li>
                    <li>hold the 5th string at the 5th fret, and tune the 4th string to this note, which is a D.</li>
                    <li>hold the 4th string at the 5th fret, and tune the 3rd string to this note, which is a G.</li>
                    <li>hold the 3rd string at the 4th fret, and tune the 2nd string to this note, which is a B.</li>
                    <li>hold the 2nd string at the 5th fret, and tune the 6th string to this note, which is an E.</li>
                </ul>
                <div id='therefore' className='about-description-text'>
                    therefore, the “joni notation” for standard tuning would be x55545, where x represents the starting pitch.
                </div>
                <div className='about-description-text'>
                    the advantage to using this system is in the ease with which one can determine shared/similar tuning families. in the case of ani’s music, both hands is played in E standard, or EADGBE, hat shaped hat is played in D standard, or DGCFAD, and swim is played in C standard, or CFBBEBGC. all of these songs would be notated as x55545, and the player could see at a glance that they are all in the same relative tuning.
                </div>
                <div className='about-description-text'>
                    if two strings are tuned in unison, the number listed will be “0”, as in garden of simple (CADGCC; x95550). if a string is tuned five or more tones above the string preceding it, it will be notated with the corresponding letter. for instance, in dilate, the 5th string is tuned an octave above the 6th string, so it is notated as AADGAD; xc5525, to indicate the 12th fret.
                </div>
                <div className='about-sub-header-text'>strings</div>
                <div className='about-description-text'>
                    though ani tours and performs with a battery of guitars and a designated guitar tech, this was not always the case. in a perfect world, one would have a designated guitar strung, set up, and intonated for each tuning. this is, of course, impractical although there are several steps one can take to prepare their guitar for the unique challenges of playing in many alternate tunings.
                </div>
                <div className='about-description-text'>
                    ani uses a medium to heavy gauge set of strings, often replacing the 5th and 6th strings with much heavier strings than are standard to any set. she also plays with slightly higher action than most, as her percussive hammer ons tend to fret sharp on guitars with lower action. it is also advisable to use a tuner to get the feel for the tuning, but to finesse the tuning by ear relative to the open strings. this will account for changes in intonation as you fret up and down the neck. remember that perfect intonation does not exist, and as alternate tuning enthusiasts, we are resigned to spend half our time tuning, and the other half playing out of tune.
                </div>
                <div className='about-sub-header-text'>
                    nails and picking
                </div>
                <div className='about-description-text'>
                    as for her right hand technique, ani has long talked about her use of the now-discontinued nailene press on nails, which she affixes to her nails with superglue/ca glue and reinforces with electrical tape up to the first knuckle. she also seems to often wrap her pinkie entirely, using it as an anchor or percussive effect. this strong right-hand attack sound can be recreated with most any brand of press on nail, though thicker nails will work best. i have personally used two press ons for each finger, and have used nylon and silk wraps on the false nails to achieve a thicker sound. the electrical tape may not be necessary if you lack the energy and vigor with which she plays, but one need but get a string caught between the false nail and their real nail only once to understand why she wraps the glue joint at the cuticle.
                </div>
                <div className='about-description-text'>
                    ani developed her signature picking style while playing in loud bars, cafes, and street corners early in her career. a well-timed slap, buzz, or tacet was used to not only punctuate certain lyrics and ideas, but to cut through the background noise and turn heads towards her. it is important to note that ani’s brilliance as a performer and composer are truly inimitable, and we as fans and enthusiasts can only ever approximate. every effort should be made to make these songs one’s own, and to reflect the styles, influences, and arrangements of the individual performer. experiment with percussive strumming, muting, and hammer ons, and don’t be afraid to let open strings ring in between chord changes.
                </div>
                <div className='about-sub-header-text'>
                    tab & transcription dynamics
                </div>
                <div className='about-description-text'>
                    the following is a list of symbols and markers which may be used to give further direction while playing these songs:
                </div>
                <DynamicsTable />
                <div className='about-header-text'>
                    acknowledgements
                </div>
                <div className='about-description-text mb-10'>
                    this project would not exist without the contribution of many members of the rbr community, and online ani forums. my thanks to the original authors and site admins of anitabs.net, as well as the transcription team at jonimitchell.com, and to bubba, sulli, andy braxton, lee houck, keith foster, greg goldstein, franco apple, keyvious avery, ronnie robinson, and the members of the ani difranco fan forum. i also wish to extend my gratitude to kris kurzawa, a legendary guitarist in his own right, who has created and developed this site for me. finally, my endless, endless, heaping thanks to ani difranco herself, whose music has been a friend, puzzle, inspiration, challenge, and tremendous gift to me and countless others for years.
                </div>
                <div className='quote'>
                    “i do it for the joy it brings
                </div>
                <div className='quote mb-10'>
                    because I’m a joyful girl”
                </div>
                <div className='about-description-text'>
                    this is a completely unauthorized fan-made publication. these transcriptions are the author's own work and represent my interpretation of the songs. you may only use these files for private study, scholarship, or research. copyrighted material contained in transcriptions is used in accordance with 'fair use'.
                </div>
            </p>
        </div>


    )
}

export default AboutMe