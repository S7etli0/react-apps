function TaskCheck (task,error) {
// check whether the data in the input field is correct to add it to a list

    let check = false;
    let text = 'Error: The input field must';
    let fail = '';

    if (isNaN(task)&&(/[a-zA-Z]/.test(task))) {
        check = true;

    } else {
        (task==='') ? (fail = `${text} not be empty!`) : (fail = `${text} contain letters!`)
    }
    
    error.textContent = fail;
    return check;
}

export default TaskCheck;