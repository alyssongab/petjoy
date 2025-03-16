const Card = ({titulo, imgUrl, desc, botao}) => {
    return(
        <div id="card" className="bg-slate-100 rounded-3xl w-[30vw] md:w-[27vw] lg:w-[25vw] min-[1440px]:w-[27vw] wider:h-[70vh] p-4 flex flex-col hover:scale-105 transition duration-300">
            {/* titulo, img, desc, button */}
            <div id="conteudo-card" className="h-full flex flex-col items-center justify-between text-center gap-5">

                <h2 className="text-center font-bold text-xs sm:text-xl md:text-2xl wider:text-3xl">{titulo}</h2>

                <img src={imgUrl} alt="pets" className="m-auto w-[18vw] sm:w-[150px] md:w-[250px] lg:[300px] wider:w-[350px] object-contain"/>

                <p className="max-[458px]:hidden sm:p-3 font-medium text-xs sm:text-sm md:text-base lg:text-lg text-center">{desc}</p>

                <button className="bg-petbrown text-slate-50 p-1 sm:p-2 text-[0.50em] sm:text-base wider:text-xl w-[15vw] wider:w-72 wider:rounded-3xl rounded-2xl hover:scale-105 m-auto">{botao}</button>
            </div>
        </div>
    )
}

export default Card;