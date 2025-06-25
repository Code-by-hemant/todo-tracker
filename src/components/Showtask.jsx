import { toast } from "react-toastify"

const Showtask = (props) => {
    const todos = props.todos
    const settodos = props.settodos

    const rederTodos = todos.map((todos) => {
        return (
            <li className="set-br" key={todos.id}> <b >Your Uniue ID :</b>{todos.id} <br /><b>Your Task :</b>{todos.title} | <span className="btn" onClick={()=>deleteTask(todos.id)} >Delete</span></li>

        )
    })

    const deleteTask = (id)=>{
        const fiteritem = todos.filter((todo)=>todo.id !== id)
        settodos(fiteritem)
       toast.error("deleted")
    }

    return (
        <>

            <ol>{rederTodos}</ol>
        </>
    )
}

export default Showtask
