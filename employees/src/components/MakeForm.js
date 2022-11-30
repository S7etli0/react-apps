// form for extracting information from csv files and checking for errors

function MakeForm({getData}) {
    
    return  <>  
                <form>
                    <label>csv file </label>
                    <input id='csvFile' type="file" accept='.csv'/>
                    <input type="submit" onClick={getData}/>
                </form>
                <div id='errors'></div>
            </>
}

export default MakeForm;