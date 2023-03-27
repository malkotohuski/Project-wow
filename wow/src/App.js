import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Login } from './componets/Login'
import { Navigation } from './componets/Navbar';
import { About } from './componets/About';
import { Contacts } from './componets/Contacts';
import { Home } from './componets/Home';
import { Footer } from './componets/Footer';
import { Routes, Route } from 'react-router-dom';
import { Alliance } from './componets/Alliance'
import { Horde } from './componets/Horde';

function App() {
    
    /*  let componets
     switch (window.location.pathname) {
         case "/":
             componets = <Home />
             break
         case "/Login":
             componets = <Login />
             break
         case "/About":
             componets = <About />
             break
         case "/Contacts":
             componets = <Contacts />
             break
             
     } */
    return (
        <div className='App'>
            <header className='App-header'>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Alliance" element={<Alliance />} />
                    <Route path="/Horde" element={<Horde />} />
                </Routes>
            </header>
            <Footer />
        </div>



        /*  <>
             <div id="box">
                 <main id="main-content">
                     
                     <BasecExample />
                     {componets}
                 </main>
             </div>
             <Footer />
         </> */
    )
}

export default App
