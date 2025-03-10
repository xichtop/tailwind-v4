import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import { AuthRoutes } from './routes/AuthRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/auth/*"
          element={<AuthRoutes />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
