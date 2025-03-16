import HeroSection from "../components/HeroSection";

const Hero = () => {
    
    return (
        <HeroSection>
            {/* Semi circulo esquerdo */}
            <div className="hidden md:block md:w-[9vw] md:absolute top-5 left-[-5px]">
                <img src="/elipseleft.png" alt="Semicirculo" className="h-60 lg:h-96"/>
            </div>

            {/* Semi ciruclo direito */}
            <div className="hidden md:block md:w-[8vw] md:absolute right-0 top-60 wider:top-80">
                <img src="/elipseright.png" alt="Semicirculo" className="h-60 lg:h-96" />
            </div>

            {/* Imagem principal e Subtitulo */}
            <div className="relative z-10">
                <div className="flex flex-col items-center justify-center p-14">
                    <h1 className="text-petbrown text-3xl sm:text-4xl md:text-5xl font-bold text-center" style={{ fontFamily: 'Lilita One, sans-serif' }}>
                        Seu Pet Merece o Melhor!
                    </h1>
                      {/* Imagem visível apenas acima de 400px */}
                <img src="/hero.png" alt="Hero" className="bg- w-[90vw] sm:w-[80vw] md:w-[60vw] object-contain mt-7 max-[400px]:hidden"/>
                
                <p className="flex flex-col text-petbrown text-center font-bold text-lg sm:text-xl lg:text-3xl lg:pt-8 mt-8 max-[400px]:bg-transparent max-[400px]:bg-opacity-70 max-[400px]:p-4 max-[400px]:rounded-lg">
                    Transforme a vida do seu peludo em uma experiência única.
                    <span>Venha ser PetJoy!</span>
                </p>
                </div>
            </div>
        </HeroSection>
    );
}

export default Hero;