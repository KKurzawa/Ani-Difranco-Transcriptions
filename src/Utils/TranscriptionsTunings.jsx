export const transcriptions = [
    {
        id: 1,
        name: '32 flavors',
        tuning: 'EADGBD',
        tuningPattern: '55543',
        pdf: '/32Flavors.pdf',
        video: 'https://www.youtube.com/watch?v=m_pMYbleHpU',
    },
    {
        id: 2,
        name: 'animal',
        tuning: 'DADGAE',
        tuningPattern: '75527',
        pdf: '/Animal.pdf',
        video: false,
    },
    {
        id: 3,
        name: 'both hands',
        tuning: 'EADGBE',
        tuningPattern: '55545',
        pdf: '/BothHands.pdf',
        video: false,
    },
    {
        id: 4,
        name: 'careless words',
        tuning: 'FADGAC',
        tuningPattern: '45523',
        pdf: '/CarelessWords.pdf',
        video: false,
    },
    {
        id: 5,
        name: 'dithering',
        tuning: 'DADGAC',
        tuningPattern: '75523',
        pdf: '/Dithering.pdf',
        video: false,
    },
    {
        id: 6,
        name: 'evolve',
        tuning: 'DGCFAD',
        tuningPattern: '55545',
        pdf: './Evolve.pdf',
        video: 'https://www.youtube.com/watch?v=FicxauojdvA',
    },
    {
        id: 7,
        name: 'falling is like this',
        tuning: 'CGCGCD',
        tuningPattern: '75752',
        pdf: './FallingIsLikeThis.pdf',
        video: false,
    },
    {
        id: 8,
        name: 'garden of simple',
        tuning: 'CADGCC',
        tuningPattern: '95550',
        pdf: './GardenOfSimple.pdf',
        video: false,
    },
    {
        id: 9,
        name: 'hearse',
        tuning: 'EADGBE',
        tuningPattern: '55545',
        pdf: './Hearse.pdf',
        video: 'https://www.youtube.com/watch?v=MWhNX4oO4iM',
    },
    {
        id: 10,
        name: 'hurricane',
        tuning: 'EADGBE',
        tuningPattern: '55545',
        pdf: './Hurricane.pdf',
        video: false,
    },
]

export function getTranscriptions() {
    return transcriptions;
}



// const transcriptions2 = [
//     {
//         id: 1,
//         tuningPattern: 'x55543',
//         tunings: {
//             tuning1: 'EADGBD',
//             songs: {
//                 song1: 'song1',
//                 song2: 'song2',

//             },
//             tuning2: 'DGCFAC',
//             songs: {
//                 song1: 'song1',
//                 song2: 'song2',
//             },
//         },

//     },
//     {
//         id: 2,
//         tuningPattern: 'x75527',
//         tunings: {
//             one: 'DADGAE',
//         }
//     },
//     {
//         id: 3,
//         tuningPattern: 'x55545',
//         tunings: {
//             one: 'EADGBE',
//             two: 'DGCFAD',
//         },
//     }
// ]

// export function getTranscriptions2() {
//     return transcriptions2;
// }
