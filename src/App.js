import React,{useState , useEffect} from "react";
import "./App.css"
import TodoInput from "./comp/TodoInput";
import TodoList from "./comp/TodoList";

function App() {

  const [data, setData] = useState([])
  const [todos, setTodos] = useState("")
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  useEffect(()=>{
    getLocalTodos()
  }, [])

  useEffect(() => {
      switch (status) {
        case "completed":
          setFilteredTodos(data.filter( item => item.completed === true ));
          break;
        case "uncompleted":
          setFilteredTodos(data.filter( item => item.completed === false ));
          break;
        default:
          setFilteredTodos(data);
          break;
      }
      saveLocalTodos()
  } , [data,status])

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(data))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === "null") {
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setData(todoLocal)
    }
  }

  return (
    <div className="App">
      <TodoInput 
      todos={todos} 
      setTodos={setTodos} 
      setData={setData} 
      data={data}
      setStatus={setStatus} 
      />
      <TodoList 
      data={data} 
      setData={setData}
      filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
