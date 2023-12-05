import { Login, Home, SingUp, Teste, Overview, AsNavFor } from '../pages'
import ProfilePage from "../pages/TestesHenrique/profilePage"
import { Navigate, Route, Routes } from 'react-router-dom';

export const AddRoutes = () => {
    return(
        <Routes>
          <Route element={<ProfilePage />} path="/profile"/>
          <Route element={<Login />} path="/" exact />
          <Route element={<Home />} path="home" />
          <Route element={<SingUp />} path='cadastro0' />
          <Route element={<Overview />} path='main' />
          <Route element={<Teste/>} path='teste' />
          <Route element={<AsNavFor/>} path='teste2' />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
    )
}