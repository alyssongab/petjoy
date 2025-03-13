const Card = () => {
    return(
        <div id="card" className="bg-slate-100 rounded-3xl min-h-[250px] w-full sm:w-[250px] md:w-[300px] p-4 flex flex-col shadow-2xl hover:scale-105 transition duration-300">
            {/* titulo, img, desc, button */}
            <div id="conteudo-card" className="p-5 flex flex-col items-center gap-2 sm:gap-6 md:ga-8 h-full">
                <h2 className="text-lg sm:text-3xl font-bold text-opacity-45">Banho e Tosa</h2>
                <img src="/card1.png" alt="pets" className="w-[120px] sm:w-[300px]"/>
                <p className="text-sm sm:text-xl">Lorem ipsum dolor sit amet</p>
                <button className="bg-petbrown text-slate-50 p-3 rounded-2xl hover:scale-105">Saiba mais</button>
            </div>
        </div>
    )
}

export default Card;