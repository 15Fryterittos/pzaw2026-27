import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";

interface Task {
  id?:number;
  title?:string;
  completed?:boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>
  ([
    { id: 1, title: "coscoscos", completed: false},
    { id: 2, title: "nicnicnic", completed: false},
    { id: 3, title: "mozemozemoze", completed: false}
  ])
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("wszystkie");

  const unfinishedTasks = tasks.filter((task) => task.completed === false).length;

  function changeStatus(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, {
        id: tasks.length + 1,
        title: newTask,
        completed: false
      }]);
      
      setNewTask("");
    }
  }

  function deleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  function deleteCompletedTasks() {
    const newTask = tasks.filter((task) => task.completed === false);

    setTasks(newTask);
  }

  let filteredTasks = tasks;

  if (filter === "wykonane") {
    filteredTasks = tasks.filter((task) => task.completed === true);
  }

  if (filter === "niewykonane") {
    filteredTasks = tasks.filter((task) => task.completed === false);
  }

  return (

    <div className="container">

    <h1>TODO</h1>

    <h3>Lista niewykonanych zadan: {unfinishedTasks} </h3>

    <input type="text" className="form" placeholder="Dodaj nowe zadanko" value={newTask} onChange={(event) => setNewTask(event.target.value)}/>

  <button className="btn btn-info" onClick={addTask}>
    Dodaj zadanie
  </button>
  <button className="btn btn-danger" onClick={deleteCompletedTasks}>
    Usun wykonane
  </button>

  <select value={filter} onChange={(event) => setFilter(event.target.value)}>
    <option value="wszystkie">Wszystkie</option>
    <option value="wykonane">Wykonane</option>
    <option value="niewykonane">Niewykonane</option>
  </select>

    {filteredTasks.map((task) => (
      <div className="card" key={task.id}>
        <div className="card-body">
          <h5>{task.title}</h5>
          <h6>Wykonanie taska: {task.completed ? "Wykonane" : "Niewykonane"}</h6>

          <button className="btn btn-success" onClick={() => changeStatus(task.id!)}>
            Zmien Status
          </button>

          <button className="btn btn-danger" onClick={() => deleteTask(task.id!)}>
            Usuń
          </button>
        </div>
      </div>
    ))}

    </div>
  );

}

export default App
