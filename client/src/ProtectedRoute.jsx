import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

function ProtectedRoute() {

    const {user, isAuthenticated, loading} = useAuth()

    if (loading) return <h1>Cargando...</h1>

    if (!loading && !isAuthenticated) return <Navigate to='/login' replace/>

    return <Outlet/>
}

export default ProtectedRoute