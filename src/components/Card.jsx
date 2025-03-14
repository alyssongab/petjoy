const Card = ({titulo, imgUrl, desc, botao}) => {
    return(
        <div id="card" className="bg-slate-100 rounded-3xl min-h-[10vh] w-[28vw] md:w-[vw] lg:w-[25vw] min-[1366px]:w-[27vw] p-4 flex flex-col shadow-2xl hover:scale-105 transition duration-300">
            {/* titulo, img, desc, button */}
            <div id="conteudo-card" className="p-1 sm:p-3 flex flex-col items-center gap-6 sm:gap-4 md:gap-6 h-full">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-opacity-45">{titulo}</h2>
                <img src={imgUrl} alt="pets" className="w-[100px] sm:w-[150px] md:w-[250px] lg:[300px] object-contain"/>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center">{desc}</p>
                <button className="bg-petbrown text-slate-50 px-3 py-2 text-sm sm:text-base rounded-2xl hover:scale-105 mt-auto">{botao}</button>
            </div>
        </div>
    )
}

export default Card;