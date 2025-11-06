import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Composants de la layout
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import PageTransition from './components/common/PagesTransition'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Service from './pages/Servise'
import Contact from './pages/contact'

function App() {


  return (
    <Router>
      <div className="h-screen w-full bg-background ">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className=''
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App

