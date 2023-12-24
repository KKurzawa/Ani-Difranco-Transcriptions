import './DynamicsTable.css';

function DynamicsTable() {
    return (
        <>
            <table className='text-center mb-10'>
                <tbody>
                    <tr>
                        <td className='about-sub-header-text'>symbol</td>
                        <td className='about-sub-header-text'>technique</td>
                    </tr>
                    <tr>
                        <td className='about-table-text text-center'>h</td>
                        <td className='about-table-text text-center'>hammer on</td>
                    </tr>
                    <tr>
                        <td className='about-table-text text-center'>p</td>
                        <td className='about-table-text text-center'>pull off</td>

                    </tr>
                    <tr>
                        <td className='about-table-text text-center'>b</td>
                        <td className='about-table-text text-center'>bend string</td>
                    </tr>
                    <tr>
                        <td className='about-table-text text-center'>/</td>
                        <td className='about-table-text text-center'>slide up</td>
                    </tr>
                    <tr>
                        <td className='backslash text-2xl font-thin'>{`\\`}</td>
                        <td className='about-table-text text-center'>slide down</td>
                    </tr>
                    <tr>
                        <td className='about-table-text text-center'>V or -</td>
                        <td className='about-table-text text-center'>vibrato</td>
                    </tr>
                    <tr>
                        <td className='about-table-text text-center'>T</td>
                        <td className='about-table-text text-center'>right hand tap</td>
                    </tr>
                    <tr>
                        <td className='about-table-text text-center'>*</td>
                        <td className='about-table-text text-center'>natural harmonic</td>
                    </tr>
                    <tr>
                        <td className='about-table-text text-center'>PM</td>
                        <td className='about-table-text text-center'>palm muting</td>
                    </tr>
                    <tr >
                        <td className='about-table-text text-center'>N.C.</td>
                        <td className='about-table-text text-center'>no chord: tacet or rest</td>
                    </tr>
                </tbody>

            </table>
        </>

    )
}

export default DynamicsTable