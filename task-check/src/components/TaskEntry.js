function TaskEntry({data,operate,place}) {
// add the task data from the input field into the correct list 

    return (
        data.map((post,index)=>{
            let hide="";
            
            if (data[index].state!==place) {
                hide="hidden";
            }

            return  <div className="innerlist" key={index} hidden={hide}>
                        <span index = {index} onClick={() => operate(index)} >

                            <label>Task # {post.num}</label>{post.task}
                            <input type='checkbox' state={post.state}/>

                        </span>
                    </div>}
        )  
    )          
}
export default TaskEntry;