import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddMovie from './pages/AddMovie'
import EditMovie from './pages/EditMovie'
import Home from './pages/Home'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/add' element={<AddMovie />}/>
        <Route path='/edit/:id' element={<EditMovie/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  
  )
}

export default App
