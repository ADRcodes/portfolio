import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Experimental from "./pages/Experimental"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experimental" element={<Experimental />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
