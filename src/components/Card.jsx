const Card = ({titulo, imgUrl, desc, botao}) => {
    return(
        <div id="card" className="bg-slate-50 flex flex-col rounded-2xl p-3 shadow-xl w-[85vw] max-h-[60vh] md:w-[60vw] md:h-[70vh] lg:w-[40vw] lg:h-[85vh] hover:scale-105 transition-all duration-300">
            {/* titulo, img, desc, button */}
            <div id="conteudo-card" className="md:p-4 h-full flex flex-col items-center justify-between text-center gap-3">

                {/* Container do titulo do card */}
                <div id="box-titulo" className="text-2xl md:text-3xl lg:text-4xl">
                    <h2 className="text-center">{titulo}</h2>
                </div>

                {/* Container da imagem */}
                <div id="box-img" className="flex justify-center items-center">
                    <img 
                    src={imgUrl} 
                    alt={titulo}
                    className=""/>
                </div>
                
                {/* Container da descricao do card */}
                <div id="box-desc" className="sm:max-md:w-[70vw] text-center p-2">
                    <p className="text-base md:text-xl 2xl:text-2xl">{desc}</p>
                </div>

                {/* Container do botao do card */}
                <div id="box-botao" className="">
                    <a href="https://wa.me/5592988016664" target='_blank'>
                        <button className="bg-petbrown text-slate-50 rounded-2xl hover:scale-105 xl:text-xl p-2 max-[400px]:w-28 w-40 xl:w-60">{botao}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;