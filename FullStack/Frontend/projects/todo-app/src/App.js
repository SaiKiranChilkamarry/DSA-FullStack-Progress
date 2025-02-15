import React,{useState} from 'react';
function App(){
  const [task,setTask]=useState("");//to store input values
  const[tasks,setTasks]=useState([])//to keep track of list of task user added

  //implimenting adding the task  when add task button clicked
  const addTask =()=>{
    setTasks([...tasks,task]);//Adding of new task
    setTask("");//clear the input feild
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
        {tasks.map((task,index)=>(
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)} style={{padding:"10px",margin:"10px",backgroundColor:"red",color:"white",fontWeight:"bolder",fontSize:"large",borderRadius:"2px",border:"None"}}>Remove Task</button>
          </li>//display each task
        ))}
      </ul>
    </div>
  );
  

}
export default App;