import {useState} from 'react';
import mods from '../importfiles/EmpImports';


function EmployeeApp () {

    // hook for sending the extracted results to the tables
    const [tabInfo,setTabInfo] = useState('');

    function GetEmpData(e) {
      
      e.preventDefault();
      let errors = document.querySelector("#errors");

      // remove the css formatting and the text for error warning 
      mods.DropErrorSign(errors);
  
      // extracting all the data from the csv file and turning it into an array
      let csvFile = document.querySelector("#csvFile");
      let content = csvFile.files[0];
      
      // extracting the data only if it's defined
      if (content!==undefined) {
  
          const reader = new FileReader();
          reader.readAsText(content);
      
          reader.onload = function () {
              
              // making the array
              let arrayData = reader.result
                  .split('\n').map(e => {
                  return e.split(', ')
              });
              
              // we inspect the array for errors and check from which row to start
              let arrayStart = mods.DataCheck(errors,arrayData);
  
              // we forward data only if the array has no errors
              if (arrayStart!=='') {  
                 let sendinfo = mods.TopEmployees(arrayData,arrayStart);
                 setTabInfo(sendinfo);

              } else {
                setTabInfo('');
              }
          };
  
      } else {
          mods.ErrorText(errors,0);
      }
  }

  // creating table and form
  return (
    <>                     
      <mods.MakeTable getInfo={tabInfo}/>
      <mods.MakeForm getData={GetEmpData}/>
    </>
  );

}

export default EmployeeApp;