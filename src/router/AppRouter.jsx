import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../features/auth/pages/LoginPage";
import  Dashboard  from "../features/dashboard/pages/Dashboard";
import  UsersPage  from "../features/users/pages/UsersPage";
import  RegisterForm  from "../features/users/pages/RegisterForm";
// import { Profile } from "../features/profile/Profile";
import { ProtectedRoute } from "./ProtectedRoute";
import ProviderRegister from "../features/providers/pages/ProviderRegister";
import ProvidersPage from "../features/providers/pages/ProvidersPage";
import ClientRegister from "../features/clients/pages/ClientRegister";
import ClientsPage from "../features/clients/pages/ClientsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta pública para el login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas dentro de MainLayout
     
      <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} /> */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/userList" element={<ProtectedRoute element={<UsersPage/>} />} />
        <Route path="/userRegister" element={<ProtectedRoute element={<RegisterForm/>} />} />
        <Route path="/providerRegister" element={<ProtectedRoute element={<ProviderRegister/>} />} />
        <Route path="/providerList" element={<ProtectedRoute element={<ProvidersPage/>} />} />
        <Route path="/clientRegister" element={<ProtectedRoute element={<ClientRegister/>} />} />
        <Route path="/clientsList" element={<ProtectedRoute element={<ClientsPage/>} />} />

       
      {/* Redirigir cualquier ruta desconocida a "/login" */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
