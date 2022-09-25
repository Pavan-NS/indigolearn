import './App.css'

import Navbar from './components/Navbar'

import HomePage from './components/HomePage'

import AccaSection from './components/AccaSection'
import AccaSectionBar from './components/AccaSectionBar'
import AccaEligibility from './components/AccaEligibility'
import Learn from './components/Learn'
import Placements from './components/Placements'

const App = () => (
  <div className="app">
    <Navbar />
    <HomePage />
    <AccaSection />
    <AccaSectionBar />
    <AccaEligibility />
    <Learn />
    <Placements />
  </div>
)

export default App
