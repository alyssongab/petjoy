import Header from './components/Header';
import Hero from './sections/Hero';
import Servicos from './sections/Servicos';
import Faq from './sections/Faq';

const App = () => {
  return (
      <>
          <Header />
          <Hero />
          <Servicos/>
          <Faq/>
      </>
  );
}

export default App;