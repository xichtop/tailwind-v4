import { Route, Routes } from 'react-router-dom';
import Login from '../components/auth/login';
import Register from '../components/auth/register';

export function AuthRoutes() {
  return (
    <Routes>
      <Route
        path="login"
        element={<Login />}
      />
      <Route
        path="register"
        element={<Register />}
      />
    </Routes>
  );
}
