const Card = ({titulo, imgUrl, desc, botao}) => {
    return(
        <div id="card" className="bg-slate-50 rounded-2xl p-2 shadow-xl 
        w-full sm:w-[90%] xl:w-[95%] 
        h-[60vh] sm:h-[50vh] md:h-[40vh] lg:h-[70vh] mx-auto">
            {/* titulo, img, desc, button */}
            <div id="conteudo-card" className="md:p-4 h-full flex flex-col items-center justify-evenly md:justify-between text-center">

                {/* Container do titulo do card */}
                <div id="box-titulo" className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    <h2 className="text-center">{titulo}</h2>
                </div>

                {/* Container da imagem */}
                <div id="box-img" className="w-[80%] flex justify-center items-center lg:w-[20vw]">
                    <img 
                    src={imgUrl} 
                    alt={titulo}
                    className=""/>
                </div>
                
                {/* Container da descricao do card */}
                <div id="box-desc" className="sm:max-md:w-[70vw] text-center p-2">
                    <p className="text-base xl:text-xl">{desc}</p>
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