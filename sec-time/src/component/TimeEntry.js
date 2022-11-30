import {useState} from 'react'
import TimeVars from './TimeVars';
import TimeData from './TimeData';


function TimeEntry({timeTransform,timeYear}) {

    const [vars,setVars] = useState(false);
    
    function Hide() {
        
        let check = TimeVars();
        
        if (check) {
            setVars(true);
        } else {
            setVars(false);
        }
    };

    
    return <div>
                <h2>Time Convertor</h2>
                <p><i>convert seconds into time</i></p>
                
                <form onSubmit={timeTransform} >
                    
                    <label>Main Entry</label><input name='timeinput' placeholder='type digits here'/><br/> 

                    <label>Set Years</label>
                    <span><input type='radio' name='yearType' value='total' onClick = {timeYear} defaultChecked/>Total</span>
                    <span><input type='radio' name='yearType' value='split' onClick = {timeYear} />Split<br/></span>

                    <input type ='submit' value='Transform' onClick={Hide}/><br/>
                    
                    <p id='fail'><i>Only numeric data allowed</i></p>
                    <span><TimeData show={vars}/></span>

                </form>
            </div>;  
}

export default TimeEntry;