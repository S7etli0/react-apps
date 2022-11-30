import expObject from "../importfiles/ImportsList";

function MakeTable({getInfo}) {

    // each cell in the table will say undefined if there's no valid data or no data at all
    let tabEmp = ['undefined','undefined','undefined'];
    let tabPrj = [['undefined','undefined']];

    if (getInfo!=='') {
        tabEmp = getInfo[0];
        tabPrj = getInfo[1];
    }
            
    return (
        <>   
            {/* information about the pair that has worked together the longest of time plus how many days  */}
            <h2>Team Members and Work</h2>
            <expObject.EmpTable tabdata={tabEmp}/>

            {/* information about the projects the pair has worked on and how long on each of them  */}
            <h2>Performance of the Team</h2>
            <expObject.ProjTable tabdata={tabPrj}/>
        </>
    );  
}

export default MakeTable;