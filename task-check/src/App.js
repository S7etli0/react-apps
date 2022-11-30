import './App.css';
import TaskList from './page-content/TaskList';

// to make a list, write a task in the input field, select state (to do at home or at work) and click (AddtoList)
// to erase a single task, tick the (Drop via Click) checkbox, then click on the task you want to remove
// to clear an entire list/s, choose a list from (Erase Multiple) then click (ClearTasks) to erase the selected list/s

function App() {

  return (<>
            <TaskList/>
          </>);

}
export default App;