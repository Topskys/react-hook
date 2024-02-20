import './App.scss'
import { HashRouter } from 'react-router-dom'
import GetRoutes from './router'

function App() {

  return (
    <div>
      <HashRouter>
        <GetRoutes/>
      </HashRouter>
    </div>
  )
}

export default App
