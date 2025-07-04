import { BrowserRouter } from 'react-router'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'

function App() {
 
  return (
    <>
      <div>
        <Header />
      </div>
      <p className="welcom-to-app">
        Welcome to SocCalSync
      </p>
      <BrowserRouter>
      <div>
        <Route path ='/Home' element={<Home />}></Route>
        <Route path ='/About' element={<About />}></Route>
      </div>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
