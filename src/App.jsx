import { useSelector } from 'react-redux';

//Components
import Navbar from './components/navbar';
import Hero from "./components/hero";
import Beneficios from './components/beneficios';
import Saly from './components/saly';
import Publico from "./components/publico";
import Modulos from "./components/modulos";
import Empresas from './components/empresas';
import Equipe from './components/equipe';
import Depoimentos from "./components/depoimentos";
import Faq from "./components/faq";
import Footer from "./components/footer";
import VLibras from '@djpfs/react-vlibras';


function App() {
  
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
   
   <main className= {`${darkTheme ? "bg-dark-primary" : "bg-light-primary"} w-full overflow-hidden`}>
    <Navbar/>
    <VLibras forceOnload={true}/>
    <Hero/>
    <Beneficios/>
    <Saly />
    <Publico/>
    <Modulos/>
    <Empresas/>
    <Equipe/>
    <Depoimentos/>
    <Faq/>
    <Footer/>
   </main>
    
  )
}

export default App