import React,{useState} from 'react';
function App(){
  const [task,setTask]=useState("");//to store input values
  const[tasks,setTasks]=useState([])//to keep track of list of task user added

  //implimenting adding the task  when add task button clicked
  const addTask =()=>{
    setTasks([...tasks,task]);//Adding of new task
    setTask("");//clear the input feild
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
      <button onClick={addTask}  style={{padding:"10px",margin:"10px"}}>Add Task</button>
      <ul>
        {tasks.map((task,index)=>(
          <li key={index}>
            {task}
          </li>//display each task
        ))}
      </ul>
    </div>
  );
  

}
export default App;