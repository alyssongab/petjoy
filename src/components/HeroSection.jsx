// Componente isolado da seção hero melhor legibilidade (por causa das classes do tailwind)

const HeroSection = ({ children }) => {
    return(
        <section id="hero" className="relative bg-[#E7B100] min-[1366px]:min-h-[100vh] max-h-[90vh] bg-opacity-10 max-[400px]:bg-[url('/hero.png')] max-[400px]:bg-cover max-[400px]:bg-center max-[400px]:bg-no-repeat max-[400px]:bg-blend-overlay max-[400px]:before:content-[''] max-[400px]:before:absolute max-[400px]:before:inset-0 max-[400px]:before:bg-amber-50 max-[400px]:before:opacity-80 max-[400px]:before:z-0 overflow-hidden">

            {/* Conteúdo dentro da seção */}
            {children} 

        </section>
    )
}

export default HeroSection;