import FaqBox from "../components/FaqBox";

const Faq = () => {
    return(
       <section id="faq" className="bg-slate-50 p-4">
            {/* subtitulo da secao */}
            <div id="subtitle-faq" className="p-3 lg:p-5">
                <h2 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">Perguntas frequentes</h2>
            </div>

            {/* Div que controla as 2 colunas em desktop: Imagem e Boxes */}
            <div className="p-3 lg:p-6 lg:grid lg:grid-cols-2 justify-center items-center">
                {/* Imagem (Oculta em mobiles) */}
                <div className="hidden lg:block">
                    {/* Div da imagem */}
                    <div className="flex justify-center items-center">
                        <img src="/img-faq.png" alt="faq-svg" className="max-w-[90%]"/>
                    </div>
                </div>
                {/* Componente: Pergunta + Resposta */}
                <div id="faq-box" className="lg:w-[48vw] lg:space-y-2 xl:w-[45vw]">
                    <FaqBox
                        pergunta="Quais tipos de pets vocês atendem?"
                        resposta="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis et id dolore ab asperiores iusto. Natus eveniet similique veritatis at, obcaecati minima quos provident dolores est dignissimos beatae cumque in."
                    />
                    <FaqBox
                        pergunta="Preciso agendar com antecedência para serviços de banho e tosa?"
                        resposta="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis et id dolore ab asperiores iusto. Natus eveniet similique veritatis at, obcaecati minima quos provident dolores est dignissimos beatae cumque in."
                    />
                    <FaqBox
                        pergunta="Vocês oferecem atendimento veterinário emergencial?"
                        resposta="orem, ipsum dolor sit amet consectetur adipisicing elit. Corporis et id dolore ab asperiores iusto. Natus eveniet similique veritatis at, obcaecati minima quos provident dolores est dignissimos beatae cumque in."
                    />
                    <FaqBox
                        pergunta="Posso deixar meu pet hospedado com vocês durante viagens longas?"
                        resposta="orem, ipsum dolor sit amet consectetur adipisicing elit. Corporis et id dolore ab asperiores iusto. Natus eveniet similique veritatis at, obcaecati minima quos provident dolores est dignissimos beatae cumque in."
                    />
                    <FaqBox
                        pergunta="Como funciona o serviço de passeios para cães?"
                        resposta="orem, ipsum dolor sit amet consectetur adipisicing elit. Corporis et id dolore ab asperiores iusto. Natus eveniet similique veritatis at, obcaecati minima quos provident dolores est dignissimos beatae cumque in."
                    />
                </div>
            </div>

       </section>
    )
}

export default Faq;