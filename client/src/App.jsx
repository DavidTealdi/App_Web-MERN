import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home page</h1>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/tasks" element={<h1>tasks</h1>}/>
            <Route path="/add-task" element={<h1>add task</h1>}/>
            <Route path="/profile" element={<h1>profile</h1>}/>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
