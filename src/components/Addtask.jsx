
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'


const Addtask = (props) => {
    const todos = props.todos
    const settodos = props.settodos
    const [task, settask] = useState('')

    const SubmitTask = (e) => {

        e.preventDefault()

        const newTask = {
            id: nanoid(),
            title: task,
            
        }
        settodos([...todos, newTask])
        settask('')
        toast.success("task added successfully")
    }
    return (
        <>
            <form onSubmit={SubmitTask}>
                <div className='task-container'>
                <input className='task-input'
                    onChange={(e) => settask(e.target.value)}
                    value={task}
                    placeholder='Enter Your task'
                    type="text" />
                <button className='add-task-btn'>Add Task</button>
                </div>
               
            </form>
        </>
    )
}

export default Addtask
