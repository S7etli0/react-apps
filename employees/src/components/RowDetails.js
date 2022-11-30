function RowDetails(arrayRow) {

    let num = 0;

    // checking for empty rows
    if (arrayRow.toString().trim()==='') {
        num = 4; 

    // checking the length of each row
    } else if (arrayRow.length!==4) {
        
        if (arrayRow.length<4) {
            num = 1;

        } else {
            num = 6;
        }
    }

    return num;
}

export default RowDetails;