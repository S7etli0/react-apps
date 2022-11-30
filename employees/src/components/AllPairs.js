import expObject from "../importfiles/ImportsList";

function AllPairs(prjGroup) {

    // grouping data about the paired employees projects based on the pair IDs
    let pairProjects = {};
    // grouping combined workdays of the paired employees based on the pair IDs
    let totalDays = {};

    // going through all the projects to find pairs of employees who worked together
    for (let prjID in prjGroup) {
        let prjInfo = prjGroup[prjID];  

        // data isn't forwarded if only one person has worked on the project overall
        if (prjInfo.length>1) {

            // comparing the start and end work date between each possible pair of employees
            // data about the first employee in the pair
            for (let j=0; j<prjInfo.length; j++) {

                let emp1ID = prjInfo[j][0];
                let dateFromEmp1 = new Date(prjInfo[j][2]);
                let dateToEmp1 = new Date(prjInfo[j][3]);

                // data about the second employee in the pair
                for (let k=j+1; k<prjInfo.length; k++) {
                   
                    let emp2ID = prjInfo[k][0];
                    let dateFromEmp2 = new Date(prjInfo[k][2]);
                    let dateToEmp2 = new Date(prjInfo[k][3]);
                    
                    // checking if the two employees have ever worked together to count the teamwork days
                    // checking who started first or have they been together from start or at finish                    
                    let days = 0;

                    if ((dateFromEmp1>=dateFromEmp2) && (dateToEmp2>=dateFromEmp1)) {

                        days = expObject.PairWorkDays(dateToEmp2,dateFromEmp1);
                         
                    } else if ((dateFromEmp2>=dateFromEmp1) && (dateToEmp1>=dateFromEmp2)) {

                        days = expObject.PairWorkDays(dateToEmp1,dateFromEmp2);
                    } 

                    // data isn't forwarded if there are no days to prove teamwork
                    if (days!==0) {
                        let teamIDs = [emp1ID,emp2ID].sort().toString();
                        
                        // setting data in the pairProjects and the totalDays objects
                        expObject.SetPrjData(pairProjects,totalDays,teamIDs,prjID,days);
                    }
                }
            }
        } 
    }

    return [pairProjects,totalDays];
}

export default AllPairs;