const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo e Nome */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <span className="text-blue-500 text-2xl">🐾</span>
                        </div>
                        <span className="text-white font-bold text-2xl">PetJoy</span>
                    </div>

                    {/* Navegação Desktop */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li><a href="#" className="text-white hover:text-yellow-200 font-medium transition-colors">Home</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-200 font-medium transition-colors">Serviços</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-200 font-medium transition-colors">Produtos</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-200 font-medium transition-colors">Galeria</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-200 font-medium transition-colors">Contato</a></li>
                        </ul>
                    </nav>

                    {/* Botões de Ação */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-white text-blue-500 px-4 py-2 rounded-full font-medium hover:bg-yellow-100 transition-colors">
                            Login
                        </button>
                        <button className="bg-yellow-300 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                            Agendar
                        </button>
                    </div>

                    {/* Menu Mobile */}
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile Dropdown (inicialmente oculto) */}
            <div className="hidden md:hidden bg-blue-600 px-4 py-2">
                <ul className="flex flex-col space-y-2">
                    <li><a href="#" className="block text-white py-2">Home</a></li>
                    <li><a href="#" className="block text-white py-2">Serviços</a></li>
                    <li><a href="#" className="block text-white py-2">Produtos</a></li>
                    <li><a href="#" className="block text-white py-2">Galeria</a></li>
                    <li><a href="#" className="block text-white py-2">Contato</a></li>
                    <li className="pt-2">
                        <div className="flex flex-col space-y-2">
                            <button className="bg-white text-blue-500 px-4 py-2 rounded-full">Login</button>
                            <button className="bg-yellow-300 text-blue-700 px-4 py-2 rounded-full">Agendar</button>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;