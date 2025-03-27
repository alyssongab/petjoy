import FaqBox from "../components/FaqBox";

const Faq = () => {
    return(
       <section id="faq" className="bg-slate-50">
            {/* subtitulo da secao */}
            <div id="subtitle-faq" className="p-3">
                <h2 className="text-center text-2xl font-bold">Perguntas frequentes</h2>
            </div>

            {/* Imagem (Oculta em mobiles) */}

            {/* Componente: Pergunta + Resposta */}
            <div id="faq-box">
                <FaqBox
                    pergunta=""
                    resposta=""
                />
                <FaqBox
                    pergunta=""
                    resposta=""
                />
                <FaqBox/>
                <FaqBox/>
                <FaqBox/>
            </div>

       </section>
    )
}

export default Faq;