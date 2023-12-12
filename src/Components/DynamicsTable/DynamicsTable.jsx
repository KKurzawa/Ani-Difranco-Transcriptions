import './DynamicsTable.css';

function DynamicsTable() {
    return (
        <table className='about-table-text text-center'>
            <tr className='about-sub-header-text'>
                <td className=''>symbol</td>
                <td>technique</td>
            </tr>
            <tr>
                <td>h</td>
                <td>hammer on</td>
            </tr>
            <tr>
                <td>p</td>
                <td>pull off</td>

            </tr>
            <tr>
                <td>b</td>
                <td>bend string</td>
            </tr>
            <tr>
                <td>/</td>
                <td>slide up</td>
            </tr>
            <tr>
                <td>\</td>
                <td>slide down</td>
            </tr>
            <tr>
                <td>V or -</td>
                <td>vibrato</td>
            </tr>
            <tr>
                <td>T</td>
                <td>right hand tap</td>
            </tr>
            <tr>
                <td>*</td>
                <td>natural harmonic</td>
            </tr>
            <tr>
                <td>PM</td>
                <td >palm muting</td>
            </tr>
            <tr >
                <td>N.C.</td>
                <td >no chord: tacet or rest</td>
            </tr>
        </table>
    )
}

export default DynamicsTable