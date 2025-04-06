import Header from './components/Header';
import Hero from './sections/Hero';
import Servicos from './sections/Servicos';
import Faq from './sections/Faq';
import Local from './sections/Local'
import Footer from './components/Footer';

const App = () => {
  return (
      <>
          <Header />
          <Hero />
          <Servicos/>
          <Faq/>
          <Local/>
          <Footer/>
      </>
  );
}

export default App;