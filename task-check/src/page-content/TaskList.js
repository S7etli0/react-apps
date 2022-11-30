import { useState } from "react";
import TaskEntry from "../components/TaskEntry";
import TaskForm from '../components/TaskForm';
import TaskCheck from '../components/TaskCheck';
import TaskRenew from '../components/TaskRenew';

function TaskList() {

    // adding data and counting the respective tasks
    const [data,setData] = useState([]);
    const [homeNum,setHomeNum] = useState([1]);
    const [workNum,setWorkNum] = useState([1]);
  
    // adding a task data to a specicic list
    function TaskAdd(e) {
        e.preventDefault();
  
        let error = document.querySelector('#taskError');
        let task = e.target.toDoTask.value;
        e.target.toDoTask.value = '';
        let state = e.target.taskState.value;
  
        let checkdata = TaskCheck(task,error);
        let num;
  
        if (checkdata) {
          (state==="at-home") ? setHomeNum(+homeNum+1) : setWorkNum(+workNum+1) ;
          (state==="at-home") ? num = homeNum : num = workNum ;
          setData([...data,{num,task,state}]);
      }
    }
  
    // erase a single task by clicking on it
    function DropTask (index) {
  
        let remove = document.querySelector('#remove').checked;
        if (remove) {
  
          const newData = [...data];
          newData.splice(index,1);
    
          let numbers = TaskRenew(newData); 
          let workTasks = numbers[0];
          let homeTasks = numbers[1];
  
          setWorkNum(workTasks);
          setHomeNum(homeTasks);
          setData([...newData])
  
        } 
    }
  
    // choose and clear one of the two lists or both of them at once
    function ClearAll (e) {
      
      e.preventDefault();
      let all = document.querySelector('#All').checked;
      let home = document.querySelector('#Home').checked;
      let work = document.querySelector('#Work').checked;
  
      if (all) {
        setHomeNum(+1);
        setWorkNum(+1);
        setData([])
      
      } else if (home) {
  
        let homedata = data.filter((part) => {return part.state==="at-work"});
        setData([...homedata]);
        setHomeNum(+1);
          
      } else if (work) {
  
        let workdata = data.filter((part) => {return part.state==="at-home"});
        setData([...workdata]);
        setWorkNum(+1);
      }
  
    }
  
    return (  <>  <h1>Create a List to Get Your Tasks Organized</h1>
                  
                  {/* main form for the input and alteration of data */}
                  <div id="main">
                    <div>
                      <TaskForm action={TaskAdd} erasure={ClearAll}/>
                      <div id="taskError"></div>
                    </div>

                    {/* two sets of lists (one for work and one for home) to add the tasks into */}
                    <div className="taskbox">
                        <div className="tasktab">
                            <h2>Workday Tasks</h2>
                            <TaskEntry data={data} operate={DropTask} place="at-work"/>
                        </div>

                        <div className="tasktab">
                            <h2>Household Tasks</h2>
                            <TaskEntry data={data} operate={DropTask} place="at-home"/>
                        </div>
                    </div>
                  </div>
                  
              </>
    );

}
export default TaskList;