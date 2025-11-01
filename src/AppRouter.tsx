import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { Layout } from './components/shared/Layout';
import { Carrito } from './pages/Carrito/Carrito';
import { Home } from './pages/Home/Home';
import { Biblioteca } from './pages/Juegos/Biblioteca';
import { Buscar } from './pages/Juegos/Buscar';
import { Juego } from './pages/Juegos/Juego';
import { Login } from './pages/Usuario/Login';
import { Perfil } from './pages/Usuario/Perfil';
import { Register } from './pages/Usuario/Register';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          {/* Pagina principal de entrada */}
          <Route index element={<Home />} />

          {/* Paginas del usuario: login, registro y perfil */}
          <Route path="/user">
            <Route path="/user/login" index element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/perfil" element={<Perfil />} />

            {/* Seguridad */}
            <Route path="*" element={<Navigate to={'/user'} />} />
          </Route>

          {/* Paginas relacionadas a los juegos: busqueda, un juego especifico  y Biblioteca*/}
          <Route path="/juegos">
            <Route path="/juegos" index element={<Buscar />} />
            <Route path="/juegos/:slug" element={<Juego />} />
            <Route path="/juegos/biblioteca" element={<Biblioteca />} />

            {/* Seguridad */}
            <Route path="*" element={<Navigate to={'/user'} />} />
          </Route>

          {/* Carrito */}
          <Route path="/carrito">
            <Route index path="*" element={<Carrito />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
