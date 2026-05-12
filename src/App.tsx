// Importamos tu nueva página
import Welcome from './pages/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SobreNosotros } from './pages/SobreNosotros';
import { Contacto } from './pages/Contacto';
import { Error404 } from './pages/error404';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<div>Servicios</div>} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;































