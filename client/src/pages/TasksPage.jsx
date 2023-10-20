import { useEffect } from "react"
import { useTasks } from "../context/TasksContext"

function TasksPage() {

    const {getTasks, tasks} = useTasks()

    useEffect(() => {
        getTasks()
    }, [])

    if (tasks.length == 0) return (<h1>No hay Tareas</h1>)

    return (
        <div>
            {
                tasks.map(tasks => (
                    <div key={tasks._id}>
                        <h1>{tasks.title}</h1>
                        <p>{tasks.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TasksPage