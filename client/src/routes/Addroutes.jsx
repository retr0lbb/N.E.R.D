import { Login, Home, SingUp } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AddRoutes = () => {
    return(
        <Routes>
          <Route element={<Login />} path="/" exact />
          <Route element={<Home />} path="home" />
          <Route element={<SingUp />} path='cadastro0' />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
    )
}