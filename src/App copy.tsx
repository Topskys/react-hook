import './App.scss'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import User from './pages/user'

function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/layout" />} />
          <Route path="/layout" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
