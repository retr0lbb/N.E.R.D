import {
  Login,
  Home,
  SingUp,
  Teste,
  Overview,
  AsNavFor,
  Profile,
  GameCart,
} from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";
import ModalProvider from "../shared/components/ModalProvider";

export const AddRoutes = () => {
  return (
    <ModalProvider>
      <Routes>
        <Route element={<Overview />} path="/" exact />
        <Route element={<Login />} path="login" />
        <Route element={<Home />} path="home" />
        <Route element={<SingUp />} path="cadastro0" />
        <Route element={<Teste />} path="teste" />
        <Route element={<Profile />} path="profile" />
        <Route element={<AsNavFor />} path="teste2" />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ModalProvider>
  );
};
