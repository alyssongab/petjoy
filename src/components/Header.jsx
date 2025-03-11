import { useState } from 'react';


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="bg-amber-50 shadow-sm">
            <div className="container mx-auto px-4 py-3 overflow-hidden">
                <div className="flex items-center justify-around">
                    {/* Logo e Nome (Esquerda) */}
                    <div className="flex items-center space-x-2">
                        <a href='#' className='flex items-center hover:scale-110 transition-all duration-300'>
                            <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                                <img src="/logo.png" alt="PetJoy Logo" className='w-6 md:w-8 object-contain'/>
                            </div>
                            <span className="text-petbrown font-bold text-2xl sm:text-3xl " style={{ fontFamily: 'Lilita One, sans-serif' }}>
                                PetJoy
                            </span>
                        </a>
                    </div>

                    {/* Navegação (Centro) - Visível apenas em desktop */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-11">
                            <li><a href="#servicos" className="text-petbrown text-lg hover:text-amber-600 font-medium transition-all duration-300 hover:scale-110 origin-center inline-block transform" style={{ fontFamily: 'Montserrat, sans-serif' }}>Serviços</a></li>
                            <li><a href="#faq" className="text-petbrown text-lg hover:text-amber-600 font-medium transition-all duration-300 hover:scale-110 origin-center inline-block transform" style={{ fontFamily: 'Montserrat, sans-serif' }}>FAQ</a></li>
                            <li><a href="#localizacao" className="text-petbrown text-lg hover:text-amber-600 font-medium transition-all duration-300 hover:scale-110 origin-center inline-block transform" style={{ fontFamily: 'Montserrat, sans-serif' }}>Localização</a></li>
                        </ul>
                    </nav>

                    {/* Botão de Agendamento (link para whatsapp) */}
                    <div className="hidden md:flex items-center">
                        <button className="bg-[#1F9B3A] hover:bg-green-400 text-white px-5 py-2 rounded-full font-medium transition-colors flex items-center space-x-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <img src="/wpp.png" alt="Whatsapp Logo" width={25}/>
                            <span>Agendamento</span>
                        </button>
                    </div>

                    {/* Área de Menu Mobile */}
                    <div className="md:hidden flex space-x-4">
                        <button className="max-[380px]:hidden bg-[#1F9B3A] hover:bg-green-400 text-white px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base rounded-full font-medium transition-colors flex items-center space-x-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <img src="/wpp.png" alt="Whatsapp Logo" className='w-[5vw]'/>
                            <span>Agendamento</span>
                        </button>

                        {/* Botão do Menu Hamnurguer */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-petbrown p-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile Dropdown (inicialmente oculto) */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white px-4 py-2 border-t`}>
                <ul className="flex flex-col space-y-2">
                    <li><a href="#servicos" className="block text-gray-700 py-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Serviços</a></li>
                    <li><a href="#faq" className="block text-gray-700 py-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>FAQ</a></li>
                    <li><a href="#localizacao" className="block text-gray-700 py-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Localização</a></li>
                    <li><a href="#" className="min-[380px]:hidden text-gray-700 py-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Agendamento</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;