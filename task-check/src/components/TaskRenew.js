function TaskRenew(taskData) {
// after one task is erased, reorder the others in the list  

    let workTasks = 1;
    let homeTasks = 1;

    for (let i=0; i<taskData.length; i++) {
      let oneTask = taskData[i];

      if (oneTask.state!=="at-home") {
          oneTask.num = workTasks;
          workTasks+=1;

        } else {
          oneTask.num = homeTasks;
          homeTasks+=1;
        }
    }
    return [workTasks,homeTasks]
}
export default TaskRenew;