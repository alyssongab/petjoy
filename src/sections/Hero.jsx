import HeroSection from "../components/HeroSection";

const Hero = () => {
    
    return (
        <HeroSection>
            {/* Semi circulo esquerdo */}
            <div className="hidden md:block md:w-[9vw] md:absolute top-5 left-[-5px]">
                <img src="/elipseleft.png" alt="Semicirculo" className="h-60 lg:h-80"/>
            </div>

            {/* Semi ciruclo direito */}
            <div className="hidden md:block md:w-[8vw] md:absolute right-0 top-60 wider:top-72">
                <img src="/elipseright.png" alt="Semicirculo" className="h-60 lg:h-80" />
            </div>

            {/* Imagem principal e Subtitulo */}
            <div className="relative z-10">
                <div className="flex flex-col items-center justify-center p-6">
                    <h1 className="text-petbrown text-3xl sm:text-4xl md:text-5xl font-bold text-center" style={{ fontFamily: 'Lilita One, sans-serif' }}>
                        Seu Pet Merece o Melhor!
                    </h1>
                    {/* Imagem visível apenas acima de 400px */}
                    <img src="/hero.png" alt="Hero" className="w-[90vw] sm:w-[80vw] md:w-[60vw] object-contain mt-7 max-[400px]:hidden"/>
                    
                    <p className="flex flex-col text-petbrown text-center font-bold text-lg sm:text-2xl p-7" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Transforme a vida do seu peludo em uma experiência única.
                        <span>Venha ser PetJoy!</span>
                    </p>
                </div>
            </div>
        </HeroSection>
    );
}

export default Hero;