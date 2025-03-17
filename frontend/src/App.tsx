import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import MeetTheHerd from './pages/MeetTheHerd'

function App() {

  return (
    <div>
      {/* <NavBar/> */}
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path="/MeetTheHurd" element={<MeetTheHerd/>} />

        </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
