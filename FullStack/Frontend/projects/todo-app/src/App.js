import React,{useState} from 'react';
function App(){

  //states for adding functionality
  const [task,setTask]=useState("");//to store input values
  const[tasks,setTasks]=useState([])//to keep track of list of task user added
  
  //states for editing functionality
  const[editingIndex,setEditingIndex]=useState(-1);//-1 means no task is edited
  const[editingText,setEditingText]=useState("");//Temparary text for editing

  //start editing a task : set the index and current text 
  const startEdit = (index,currentTask) => {
    setEditingIndex (index)
    setEditingText(currentTask)


  }
  //save edited task:update the task in the list
  const saveEdit=(index)=>{
    const updatedTasks = tasks.map((task,i)=>{
      return i === index ? { ...task, text: editingText }:task;
      
    });
    setTasks(updatedTasks);
    setEditingIndex(-1);
    setEditingText("");
  };
  //cancel editing:reset the editing state
  const cancelEdit=()=>{
    setEditingIndex (-1);
    setEditingText("");
  };

  const toggleTaskCompletion=(index)=>{
    const updatedTasks = tasks.map((task,i)=>{
      if (i===index){
          return{...task,completed:!task.completed};
        }
        return task;
    });
    setTasks(updatedTasks)
  };

  //implimenting adding the task  when add task button clicked
  const addTask =()=>{

    if (task.trim()!==""){
      const newTask={text:task,completed:false};
      setTasks([...tasks,newTask]);//Adding of new task
      setTask("");//clear the input feild
    }
    
  };
  //delete task button
  const deleteTask=(indexToDelete)=>{
    setTasks(tasks.filter((_,index)=>index!==indexToDelete));
  };

  return (
    <div className="App">
      <h1>
        To-Do App
      </h1>
      <input
        type = "text"
        placeholder="Enter task..."
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        style={{padding:"10px",margin:"10px",width:"200px"}}
      />
      <button onClick={addTask}  style={{padding:"10px",margin:"10px",backgroundColor:"green", color:"white",fontWeight:"bolder",fontSize:"large",borderRadius:"2px",border:"None"}}>Add Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>

            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={{padding:"10px",margin:"10px",width:"140px"}}
                />
                <button onClick={() => saveEdit(index)}style={{padding:"10px",margin:"10px",backgroundColor:"green", color:"white",fontWeight:"bolder",fontSize:"small",borderRadius:"2px",border:"None"}}>Save</button>
                <button onClick={cancelEdit} style={{padding:"10px",margin:"10px",backgroundColor:"red", color:"white",fontWeight:"bolder",fontSize:"small",borderRadius:"2px",border:"None"}}>Cancel</button>
              </>
            ) : (
              <>
              <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleTaskCompletion(index)}
                >
                  {task.text}
                </span>
                <button onClick={() => startEdit(index, task.text)} style={{padding:"10px",margin:"10px",backgroundColor:"cyan", color:"Black",fontWeight:"bolder",fontSize:"large",borderRadius:"2px",border:"None"}}>Edit</button>
                <button onClick={() => deleteTask(index)} style={{padding:"10px",margin:"10px",backgroundColor:"red", color:"White",fontWeight:"bolder",fontSize:"large",borderRadius:"2px",border:"None"}}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;