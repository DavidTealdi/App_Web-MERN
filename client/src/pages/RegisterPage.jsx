import { useForm } from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const RegisterPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signup, isAuthenticated, errors: registerErrors} = useAuth()
    const navigation = useNavigate()

    console.log(registerErrors)

    useEffect(() => {
        if (isAuthenticated) navigation('/tasks')
    }, [isAuthenticated])

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            
            <form onSubmit={handleSubmit(async (values) => {
                signup(values)
            })}>

                <input type="text" 
                    {...register('username', {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Nombre de usuario'
                />
                {
                    errors.username && (
                        <p className='text-red-500'>
                            Usuario requerido
                        </p>
                    )
                }
                <input type="email" name="email"
                    {...register('email', {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                {
                    errors.email && (
                        <p className='text-red-500'>
                            Email requerido
                        </p>
                    )
                }
                <input type="password" 
                    {...register('password', {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Contraseña'
                />
                {
                    errors.password && (
                        <p className='text-red-500'>
                            Contrasena requerida
                        </p>
                    )
                }

                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white'>
                            {error}
                        </div>
                    ))
                }

                <button>
                    Registrarse
                </button>

            </form>
        </div>
    )
}

export default RegisterPage