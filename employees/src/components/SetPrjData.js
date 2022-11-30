// setting data in the pairProjects and the totalDays objects
function SetPrjData(pairProjects,totalDays,teamIDs,prjID,days) {

    // create ID property in both objects if the pair IDs are not in them
    if (!pairProjects.hasOwnProperty(teamIDs)) {

        pairProjects[teamIDs] = [];
        pairProjects[teamIDs].push([prjID,days]);
        totalDays[teamIDs] = Number(days);

    // add the data about the pair's project to the pair Projects object
    // sum the pair's workdays in the total workdays object
    } else {

        pairProjects[teamIDs].push([prjID,days]);
        let dayTime = Number(totalDays[teamIDs]);
        totalDays[teamIDs] = Number(days)+dayTime;
    }
}

export default SetPrjData;