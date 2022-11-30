import expObject from "../importfiles/ImportsList";


// checking the data in the csv file for errors
function DataCheck(errors,arrayData) {

    let arrayStart = 0;

    for (let row in arrayData) {

        // checking the overall content of each row
        let arrayRow = arrayData[row];
        let startCheck = expObject.RowDetails(arrayRow);

        if (startCheck!==0) {

            arrayStart = expObject.ErrorText(errors,startCheck);
            break;       
        
        } else {
            
            // checking the exact content of each row
            for (let index in arrayRow) {

                let item = arrayRow[index];

                // checking for empty cells
                if (item==='') {

                    arrayStart = expObject.ErrorText(errors,2); 
                    break;

                // checking the header for letters
                } else if ((row<1) && ((!(/[a-zA-Z]/.test(item))))) {

                    arrayStart = 1;                
                
                } else if (row>0) {

                    // checking the first two cells for numeric data
                    if ((index<2) && (!/[0-9]/.test(item))) {

                        arrayStart = expObject.ErrorText(errors,5); 
                        break;
                    }
                    
                    // checking the last two cells for valid dates
                    else {
                        let datesTest = expObject.FromToDates(arrayStart,arrayRow,index,item);

                        if (datesTest!==arrayStart) {
                            arrayStart = expObject.ErrorText(errors,datesTest); 
                            break;
                        }      
                    }
                }    
            }
        }

        if (arrayStart==='') {break;}
    }

    return arrayStart;
}

export default DataCheck;