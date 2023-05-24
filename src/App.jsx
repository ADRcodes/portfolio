import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  )
}

export default App
