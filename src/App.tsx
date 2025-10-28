import { ToastContainer } from "react-toastify"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Container from "./Layouts/Container"
import AboutMe from "./Pages/AboutMe"
import ContatMe from "./Pages/ContatMe"
import Index from "./Pages/Index"
import Portfolio from "./Pages/Portfolio"
import SkillsCarousel from "./Components/SkillsCarousel"

function App() {
  return (
    <>
      <Header />

      <Container>
        <Index />
      </Container>

      <AboutMe />

      <div className="container mx-auto p-2">
        <Portfolio />
      </div>

      <div className="w-full py-12">
        <SkillsCarousel />
      </div>


      <ContatMe />

      <div className="container mx-auto p-2">
        <Footer />
      </div>

      <ToastContainer
        theme="dark"
        position="bottom-right"
      />
    </>
  )
}

export default App
