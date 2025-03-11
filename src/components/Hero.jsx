const Hero = () => {
    
    return (
        <section id="hero" className="relative bg-[#E7B100] h-[90vh] bg-opacity-10 max-[400px]:bg-[url('/hero.png')] max-[400px]:bg-cover max-[400px]:bg-center max-[400px]:bg-no-repeat max-[400px]:bg-blend-overlay max-[400px]:before:content-[''] max-[400px]:before:absolute max-[400px]:before:inset-0 max-[400px]:before:bg-amber-50 max-[400px]:before:opacity-80 max-[400px]:before:z-0 max-[400px]:h-[60vh]">
            {/* Semi circulo esquerdo */}
            <div className="hidden md:block md:w-[13vw] md:absolute top-5 left-0">
                <img src="/elipseleft.png" alt="Semicirculo" className="h-[60vh]"/>
            </div>

            {/* Semi ciruclo direito */}
            <div className="hidden md:block md:w-[13vw] md:absolute right-0 top-32">
                <img src="/elipseright.png" alt="Semicirculo" className="h-[60vh]" />
            </div>

            {/* Imagem principal e Subtitulo */}
            <div className="relative z-10">
                <div className="flex flex-col items-center justify-center p-14">
                    <h1 className="text-petbrown text-3xl sm:text-4xl md:text-5xl font-bold text-center" style={{ fontFamily: 'Lilita One, sans-serif' }}>
                        Seu Pet Merece o Melhor!
                    </h1>
                      {/* Imagem visível apenas acima de 400px */}
                <img src="/hero.png" alt="Hero" className="bg- w-[90vw] sm:w-[80vw] md:w-[60vw] object-contain mt-7 max-[400px]:hidden"/>
                
                <p className="flex flex-col text-petbrown text-center font-bold text-xl mt-8 max-[400px]:bg-transparent max-[400px]:bg-opacity-70 max-[400px]:p-4 max-[400px]:rounded-lg">
                    Transforme a vida do seu peludo em uma experiência única.
                    <span>Venha ser PetJoy!</span>
                </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;