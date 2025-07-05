import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
import Register from './component/user component/Register'
import Login from './component/user component/Login'
import Dashboard from './component/user component/Dashboard'
import EventTable from './component/event component/EventTable'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <div>
        <Header />
      </div>
      <p className="welcome-to-app">
        Welcome to SocCalSync!
      </p>
      <div>
        <Routes>
          <Route path ='/Home' element={<Home />}/>
          <Route path ='/About' element={<About />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='Login' element={<Login />}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/EventList' element={<EventTable />}></Route>
        </Routes>
      </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
