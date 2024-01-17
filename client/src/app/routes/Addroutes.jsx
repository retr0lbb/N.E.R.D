import { Login, Home, SingUp, Teste, Overview, AsNavFor, Profile } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import GameDetail from '../pages/gamedetail/GameDetail'
import ConfigurationPage from '../../pages/Config'
import LibPage from '../../pages/LibPage'
import ModalProvider from '../shared/components/ModalProvider';
import Future from '../pages/Future'
import NavBarHeader from '../../components/Navbar'

export const AddRoutes = () => {
    return(
      <ModalProvider>
         <Routes>
          <Route element={<Overview />} path="/" exact />
          <Route element={<Future />} path="/users/config" />
          <Route element={<Future />} path="/music" />
          <Route element={<Future />} path="/comus" />
          <Route element={<Future />} path="/friends" />
          <Route element={<Login />} path='login' />
          <Route element={<Home />} path="home" />
          <Route element={<SingUp />} path='cadastro0' />
          <Route element={<Teste/>} path='teste' />
          <Route element={<Profile />} path='profile' />
          <Route element={<AsNavFor/>} path='teste2' />
          <Route element={<LibPage />} path="lib" />
          <Route element={<GameDetail/>} path="gamedetail/:id" />
          <Route path="*" element={<Navigate to='/' />}/>
        </Routes>
      </ModalProvider>
       
    )
}
