// IDs of the pair that has worked together the longest of time plus how many days
function EmpTable({tabdata}) {

    return <>
    
            <table>
                <tbody>
                    <tr>
                        <th>Emp #1 ID</th>
                        <th>Emp #2 ID</th>
                        <th>Comb Days</th>
                    </tr>
                    <tr>

                        {tabdata.map((post,index)=>{
                                return (                        
                                    <td key={index}>{tabdata[index]}</td>
                                )
                        })}

                    </tr>
                </tbody>
            </table>
    </>

}

export default EmpTable;