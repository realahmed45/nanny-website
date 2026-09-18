import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Bubbles from './components/Bubbles'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AiAssistant from './components/AiAssistant'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Contact from './pages/Contact'

/** Routing keeps scroll position by default; each page should open at the top. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Behind every route, so the drift continues across navigation. */}
      <Bubbles />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {/* Renders nothing unless VITE_AI_ENABLED === 'true'. */}
      <AiAssistant />
    </BrowserRouter>
  )
}
