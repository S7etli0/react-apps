// css formatting and content for the error warning 
function ErrorText(errors,text) {

    errors.style.border = "3px solid black";
    errors.style.backgroundColor = 'red';
    errors.style.padding = '7.5px';
    errors.style.marginTop = '25px';

    // what alert text to display depending on the error present in the csv file
    switch(text) {

        case 0: errors.append('ERROR : No csv file has been selected yet!'); break;
        case 1: errors.append('ERROR : There\'s a missing cell in the csv file!'); break;
        case 2: errors.append('ERROR : The csv file contains an empty cell!'); break;
        case 3: errors.append('ERROR : A date in the csv file is not a workday!'); break;
        case 4: errors.append('ERROR : The csv file contains an empty row!'); break;
        case 5: errors.append('ERROR : NaN data in a numeric cell of the csv file!'); break;
        case 6: errors.append('ERROR : There\'s an extra cell in the csv file!'); break;
        case 7: errors.append('ERROR : The dates from and to are incorrect!'); break;
        default: errors.append('ERROR : Incorrect date input in the csv file!'); 

    }   return ''; 
}

export default ErrorText;