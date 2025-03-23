const Card = ({titulo, imgUrl, desc, botao}) => {
    return(
        <div id="card" className="bg-slate-50">
            {/* titulo, img, desc, button */}
            <div id="conteudo-card" className="md:p-4 h-full flex flex-col items-center justify-between text-center">

                <div id="box-titulo" className="bg-pink-400">
                    {/* <h2 className="text-center pb-3 font-bold text-xs sm:text-xl md:text-2xl wider:text-3xl">{titulo}</h2> */}
                    <h2>titulo</h2>
                </div>

                <div id="box-img" className="bg-red-500">
                    {/* <img src={imgUrl} alt="pets" className="m-auto w-[18vw] sm:w-[150px] md:w-[250px] lg:[300px] wider:w-[350px] object-contain"/> */}
                    <p>imagem</p>
                </div>
                
                <div id="box-desc" className="bg-green-600">
                    {/* <p className="max-[458px]:hidden sm:p-3 font-medium text-xs sm:text-sm md:text-base lg:text-lg text-center">{desc}</p> */}
                    <p>descricao</p>
                </div>

                <div id="box-botao" className="bg-blue-600">    
                    {/* <button className="absolute bottom-0 bg-petbrown text-slate-50 p-1 sm:p-2 text-[0.50em] sm:text-base wider:text-xl w-[15vw] wider:w-72 wider:rounded-3xl rounded-2xl hover:scale-105">{botao}</button> */}
                    <button>botao</button>
                </div>
            </div>
        </div>
    )
}

export default Card;