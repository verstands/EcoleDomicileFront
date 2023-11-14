
import './App.css'
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './Components/AuthLayout';
import RouteLayout from './Components/RouteLayout';
import Home from './Pages/Home/Home';

function App() {

  return (
      <main>
        <Routes>s
          {/* public routes */}
          <Route element={<AuthLayout />}>
              <Route path='/sign-in' element={null}></Route>
              <Route path='/sign-up' element={null}></Route>
          </Route>
          {/* private routes */}
          <Route element={<RouteLayout />}>
              <Route index path='/' element={<Home />}></Route>
          </Route>
        </Routes>
      </main>
  )
}

export default App
