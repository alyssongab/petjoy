const Card = ({titulo, imgUrl, desc, botao}) => {
    return(
        <div id="card" className="bg-slate-50 flex flex-col rounded-2xl p-3 shadow-xl w-[85vw] max-h-[60vh] md:w-[60vw] md:h-[70vh] lg:w-[40vw] lg:h-[85vh] hover:scale-105 transition-all duration-300">
            {/* titulo, img, desc, button */}
            <div id="conteudo-card" className="md:p-4 h-full flex flex-col items-center justify-between text-center gap-3">

                {/* Container do titulo do card */}
                <div id="box-titulo" className="text-2xl md:text-3xl lg:text-4xl">
                    <h2 className="text-center">{titulo}</h2>
                    {/* <h2>titulo</h2> */}
                </div>

                {/* Container da imagem */}
                <div id="box-img" className="flex justify-center items-center">
                    <img 
                    src={imgUrl} 
                    alt={titulo}
                    className=""/>
                    {/* <p>imagem</p> */}
                </div>
                
                {/* Container da descricao do card */}
                <div id="box-desc" className="">
                    <p className="sm:p-3 font-medium text-xs sm:text-sm md:text-base lg:text-lg text-center">{desc}</p>
                    {/* <p>descricao</p> */}
                </div>

                {/* Container do botao do card */}
                <div id="box-botao" className="">
                    <button className="bg-petbrown text-slate-50 p-1 sm:p-2 text-[0.50em] sm:text-base wider:text-xl w-[15vw] wider:w-72 wider:rounded-3xl rounded-2xl hover:scale-105">{botao}</button>
                    {/* <button>botao</button> */}
                </div>
            </div>
        </div>
    )
}

export default Card;