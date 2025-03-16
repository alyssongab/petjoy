const Card = ({titulo, imgUrl, desc, botao}) => {
    return(
        <div id="card" className="bg-slate-100 rounded-3xl min-h-[10vh] w-[30vw] md:w-[27vw] lg:w-[25vw] min-[1440px]:w-[27vw] min-[1440px]:h-[62vh] p-4 flex flex-col shadow-2xl hover:scale-105 transition duration-300">
            {/* titulo, img, desc, button */}
            <div id="conteudo-card" className="p-1 sm:p-3 flex flex-col items-center gap-6 sm:gap-4 md:gap-6">

                <h2 className="font-bold text-lg sm:text-xl md:text-2xl wider:text-3xl">{titulo}</h2>

                <img src={imgUrl} alt="pets" className="w-[100px] sm:w-[150px] md:w-[250px] lg:[300px] wider:w-[350px] object-contain"/>

                <p className="p-3 font-medium text-xs sm:text-sm md:text-base lg:text-lg text-center">{desc}</p>

                <button className="bg-petbrown text-slate-50 p-2 text-sm sm:text-base wider:text-xl w-[15vw] wider:w-72 wider:rounded-3xl rounded-2xl hover:scale-105 mt-auto">{botao}</button>
            </div>
        </div>
    )
}

export default Card;