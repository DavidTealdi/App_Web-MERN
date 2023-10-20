import {useForm} from 'react-hook-form'
import { useTasks } from '../context/TasksContext'
import {useNavigate} from 'react-router-dom'

function TaskFormPage() {

    const  {register, handleSubmit} = useForm()
    const {createTask} = useTasks()
    const navigate = useNavigate()

    const onSubimt = handleSubmit((data) => {
        createTask(data)
        navigate('/tasks')
    })

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <form onSubmit={onSubimt}>
                
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    {...register('title')}
                    autoFocus
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                />

                <textarea 
                    rows="3"
                    placeholder="Descripcion"
                    {...register('description')}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                ></textarea>

                <button className='text-sky-500'>
                    Guardar
                </button>

            </form>
        </div>
    )
}

export default TaskFormPage