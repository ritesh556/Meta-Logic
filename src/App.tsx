// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/layout/Header'
import Home from './Pages/Home'

import Footer from './components/layout/footer'
import Services from './Pages/Services'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      {/* <Home/> */}
      <Services/>
      <Footer/>

    </>
  )
}

export default App
