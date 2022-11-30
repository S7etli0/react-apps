function FromToDates(arrayStart,arrayRow,index,item) {

    let num = arrayStart;

    // checking the last two cells for valid dates, check if the last cell is null
    if (((index>1)) && ((!/[0-9]/.test((new Date(item)).toString())))) {
                        
        if ((index<3) || ((index>2) && (item.trim().toLowerCase()!=='null'))) {
            num = 8;
        }       
    }

    // checking if the project dateFrom and dateTo are workdays
    else if (((index>1)) && ((/[0-9]/.test((new Date(item)).toString())))) {
        
        let weekend = new Date(item).getDay();
        if ((weekend===6) || (weekend===0)) {
            num = 3;
        }

        // checking if the project dateFrom is before the dateTo
        else if (index>2) {
        
            let dateFrom = new Date(arrayRow[index-1]);
            let dateTo = new Date(arrayRow[index]);
            let today = new Date();

            if ((dateFrom>=dateTo) || (dateFrom>today)) {
                num = 7;
            }   
        }
    }

    return num;
}  

export default FromToDates;