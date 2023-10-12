import { useForm } from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
import { useEffect } from 'react'
import {useNavigate, Link} from 'react-router-dom'

const RegisterPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signup, isAuthenticated, errors: registerErrors} = useAuth()
    const navigation = useNavigate()

    console.log(registerErrors)

    useEffect(() => {
        if (isAuthenticated) navigation('/tasks')
    }, [isAuthenticated])

    // bg-zinc-800 max-w-md p-10 rounded-md
    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center '>
            
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                
                <h1 className='text-2xl front-bold'>Registro</h1>

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

                    <button className='text-sky-500'>
                        Registrarse
                    </button>

                </form>

                <p className='mt-3'>
                ¿Ya tienes cuenta?<Link to='/login' className='text-sky-500'> Login</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage