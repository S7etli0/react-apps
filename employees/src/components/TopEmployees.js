import expObject from "../importfiles/ImportsList";

function TopEmployees(arrayData,arrayStart) {

    // ordering the employees into object groups based on the projects ID
    let prjGroup = {};

    for (let i=arrayStart; i<arrayData.length; i++) {

        // if the last cell is null we apply the current date
        let dateTo = arrayData[i][3];
        if (dateTo.toLowerCase()==='null') {
            arrayData[i][3] = new Date().toISOString().slice(0, 10);
        }
        
        // create projects ID property if it's not in the object
        let prjNameID = arrayData[i][1];
        if (!prjGroup.hasOwnProperty(prjNameID)) {
            prjGroup[prjNameID]=[];
        }

        // add employee data to the project property if it's not in the object
        let emplData = arrayData[i];
        let prjEntry = prjGroup[prjNameID];

        if (!prjEntry.toString().includes(emplData.toString())) {
            prjEntry.push(emplData);
        }
    }

    // pairing up employees who've worked together by project ID
    // getting data about each pair's projects and total workdays
    let allteams = expObject.AllPairs(prjGroup);
    let pairProjects = allteams[0];
    let totalDays = allteams[1];

    // the information that will be used to fill the tables
    let tableResults = expObject.FinalResults(pairProjects,totalDays);

    return tableResults;
}

export default TopEmployees;