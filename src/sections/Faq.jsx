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

       </section>
    )
}

export default Faq;