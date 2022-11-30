function FinalResults(pairProjects,totalDays) {

    // get the total workdays of all the pairs, find the top value and it's index
    let daysOnly = Object.values(totalDays);
    let maxDays = Math.max(...daysOnly);
    let index = daysOnly.indexOf(maxDays);

    // get the IDs of all the pairs, use the top value index to find the top pair
    let pairsOnly = Object.keys(totalDays);
    let bestPair = pairsOnly[index];
 
    // array with all the projects that the topteam took part in
    let bestPairPrjs = pairProjects[bestPair];
    // array with the topteam total workdays and the team members
    bestPair = bestPair.split(',');
    bestPair.push(maxDays);

    // the information that will be used to fill the tables
    return [bestPair,bestPairPrjs];
}

export default FinalResults;