import { useState } from 'react'
import Addtask from './components/Addtask'
import Showtask from './components/Showtask'
import './components/Read.css'; // Adjust the path as needed

 

const App = () => {

  const [todos, settodos] = useState([])
  return (
    <>
      <h1>Todo Task</h1>
      <Addtask todos={todos} settodos={settodos} />
      <h4>Your tasks</h4>
      <Showtask todos={todos} settodos={settodos} />
     
    </>
  )
}

export default App
