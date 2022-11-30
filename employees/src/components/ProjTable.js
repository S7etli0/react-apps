// information about the projects the pair has worked on and how long on each of them
function ProjTable({tabdata}) {

    return <>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Project ID</th>
                        <th>Workdays</th>
                    </tr>

                        {tabdata.map((post,index)=>{
                                return (
                                    <tr key={'0'+index}>
                                        <th>Project #{index+1}</th>
                                        <td>{tabdata[index][0]}</td>
                                        <td>{tabdata[index][1]}</td>
                                    </tr>
                                )      
                        })}

                </tbody>
            </table>                 
    </>
}

export default ProjTable;