function TaskForm({action,erasure}) {
// the form used for the creation and alteration of a task list

    return  <>  
                <div className="inputbox">
                    <form onSubmit={action}>

                        <span><label>Input Tasks</label>
                        <input type="text" name="toDoTask" placeholder="write a task here"/></span>

                        <span><label>Set Task State</label>
                        <input type="radio" name="taskState" value="at-work" defaultChecked/>Work
                        <input type="radio" name="taskState" value="at-home"/>Home</span>
                        
                        <span><input type="submit" value="AddtoList"/><br/></span>

                    </form>
                   
                    <form onSubmit={erasure}>
                        <span><label>Single Erase</label>
                        <input type="checkbox" name="taskDrop" id="remove"/>Drop via Click</span>
                        
                        <span><label>Erase Multiple</label>
                        <input type="radio" name="clearTasks" id="All" defaultChecked/>All
                        <input type="radio" name="clearTasks" id="Work"/>Work
                        <input type="radio" name="clearTasks" id="Home"/>Home</span>
                        
                        <span><input type="submit" value="ClearTasks"/></span>

                    </form>
                </div>
            </>
}
export default TaskForm;