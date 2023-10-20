import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signin, errors: SigninErrors, isAuthenticated} = useAuth()

    const navigate = useNavigate()


    const onSubmit = handleSubmit((data) => {
        signin(data)
    })

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>

            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

                <h1 className='text-2xl front-bold'>Login</h1>

                <form onSubmit={onSubmit}>

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
                        SigninErrors.map((error, i) => (
                            <div key={i} className='bg-red-500 p-2 text-white mt-2 text-center'>
                                {error}
                            </div>
                        ))
                    }

                    <button className='text-sky-500'>
                        Login
                    </button>

                </form>

                <p className='mt-3'>
                ¿Aun no tienes cuenta? <Link to='/register' className='text-sky-500'> Registrarse</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage