import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import TaskFormPage from "./pages/TasksFormPage"
import TasksPage from './pages/TasksPage'
import ProfilePage from './pages/ProfilePage'

import ProtectedRoute from "./ProtectedRoute"

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          
            <Route element={<ProtectedRoute/>}>
              <Route path="/tasks" element={<TasksPage/>}/>
              <Route path="/add-task" element={<TaskFormPage/>}/>
              <Route path="/tasks/:id" element={<TaskFormPage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
