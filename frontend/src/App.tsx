import { Route, Routes, useLocation, Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import MeetTheHerd from './pages/MeetTheHerd'
import Admin from './pages/Admin'
import FAQs from './pages/FAQs'

function App() {
  return (
    <Routes>
      {/* User layout for all public-facing routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/MeetTheHerd" element={<MeetTheHerd />} />
        <Route path="/faqs" element={<FAQs />} />
      </Route>

      {/* Admin route (no UserLayout) */}
      <Route path="/Admin" element={<Admin />} />
    </Routes>
  )
}

/* Layout Wrapper for User Pages */
function UserLayout() {
  const location = useLocation();
  const displayBanner = location.pathname === "/"; // Only show banner on homepage

  return (
    <>
      <NavBar displayBanner={displayBanner} />
      <Outlet /> {/* Renders the matched child route */}
      <Footer />
    </>
  )
}

export default App
