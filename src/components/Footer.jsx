export default function Footer() {
    return (
      <footer className="bg-[#A3843B] text-white">
        {/* Parte superior do rodapé */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          
          {/* Coluna 1: Sobre a empresa */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐾</span>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Lilita One, sans-serif' }}>Petshop PetJoy</h2>
            </div>
            <p className="text-sm text-center">
              Somos uma empresa focada no bem-estar dos pets,
              oferecendo serviços de qualidade para cuidar e transformar a vida dos animais e seus tutores.
            </p>
          </div>
  
          {/* Coluna 2: Redes Sociais */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Lilita One, sans-serif' }}>Redes sociais</h2>
            <ul className="flex flex-col items-center space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <img src="/instagram.png" alt="instagram" width={25}/> @petjoy
              </li>
              <li className="flex items-center gap-2">
              <img src="/twitter.png" alt="twitter" width={25}/>@petjoy
              </li>
              <li className="flex items-center gap-2">
              <img src="/yt.png" alt="youtube" width={25}/> @ytpetjoy
              </li>
            </ul>
          </div>
  
          {/* Coluna 3: Links rápidos */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Lilita One, sans-serif' }}>Links rápidos</h2>
            <ul className="space-y-2 text-sm underline">
              <li className="hover:scale-105 transition-all duration-300"><a href="#">Home</a></li>
              {/* <li><a href="#">Sobre nós</a></li> */}
              <li className="hover:scale-105 transition-all duration-300"><a href="#localizacao">Localização</a></li>
              <li className="hover:scale-105 transition-all duration-300"><a href='https://wa.me/' target='_blank'>Agendar uma consulta</a></li>
            </ul>
          </div>
        </div>
  
        {/* Parte inferior */}
        <div className="bg-[#3C2F14] text-xs sm:text-sm text-white py-4 px-4 flex flex-col md:flex-row justify-between items-center">
          <span>Copyright © 2025 PetJoy. Todos os direitos reservados</span>
          <span>Desenvolvido por <a href="https://github.com/alyssongab" target="_blank" className="text-yellow-300 font-semibold">Alysson Gabriel</a></span>
        </div>
      </footer>
    );
  }
  