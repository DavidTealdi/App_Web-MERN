import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


function Navbar() {

    const {isAuthenticated, logout, user} = useAuth()

    return (
        <nav className="bg-zinc-700 my-3 mt-0 flex justify-between py-5 px-10 rounded">
            
            <Link to='/tasks'>
                <h1 className="text-2xl font-bold">Tasks Navager</h1>
            </Link>

            <ul className="flex gap-x-2">
                {
                    isAuthenticated ? (
                        <>
                            <li className="flex mr-4">
                                Bienvenido <p className="text-blue-400 ml-2">{user.username}</p> 
                            </li>
                            <li>
                                <Link to='/add-task'>
                                    Agregar tarea
                                </Link>
                            </li>
                            <li className="text-red-400 ml-2">
                                <Link to='/' onClick={() => {logout()}}>
                                    Cerrar sesion
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="mr-4 bg-indigo-500 px-4 py-1">
                                <Link to='/login'>
                                    Login
                                </Link>
                            </li>
                            <li className="mr-4 bg-indigo-500 px-4 py-1">
                                <Link to='/register'>
                                    Registro
                                </Link>
                            </li>
                        </>
                    )
                }
                
            </ul>
        </nav>
    )
}

export default Navbar