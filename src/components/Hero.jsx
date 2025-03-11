const Hero = () => {
    
    return (
        <section id="hero" className="relative bg-[#E7B100] bg-opacity-10 h-[90vh]">
            {/* Semi circulo esquerdo */}
            <div className="hidden md:block md:w-[13vw] md:absolute top-5 left-0">
                <img src="/elipseleft.png" alt="Semicirculo" className="h-[60vh]"/>
            </div>

            {/* Semi ciruclo direito */}
            <div className="hidden md:block md:w-[13vw] md:absolute right-0 top-32">
                <img src="/elipseright.png" alt="Semicirculo" className="h-[60vh]" />
            </div>

            {/* Imagem principal e Subtitulo */}
            <div>
                <div className="flex flex-col items-center justify-center p-14">
                    <h1 className="text-petbrown text-3xl sm:text-4xl md:text-5xl font-bold text-center" style={{ fontFamily: 'Lilita One, sans-serif' }}>
                        Seu Pet Merece o Melhor!
                    </h1>
                    <img src="/hero.png" alt="Hero" className="w-[90vw] sm:w-[80vw] md:w-[60vw] object-contain mt-7"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;