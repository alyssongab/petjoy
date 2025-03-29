import Card from "../components/Card";

const Servicos = () => {
    return(
        <section id="servicos" className="bg-[#E8C44F] p-4">

            <div id="subtitle-servicos" className=" p-5">
                <h2 className="text-petbrown text-center text-3xl sm:text-4xl font-bold " style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Conheça nossos serviços
                </h2>
            </div>

            <div id="cards" className="flex flex-col pb-5 md:p-8 md:flex-row justify-center items-center gap-8">
                <Card
                    titulo="Banho e Tosa"
                    imgUrl="/card-banhotosa.png"
                    desc="Banho completo, tosa e cuidados com a pele/pelagem, específicos para cada tipo de pet."
                    botao="Saiba mais"
                />
                <Card
                    titulo="Consultas"
                    imgUrl="/card-consultas.png"
                    desc="Agendamento de consultas veterinárias com diferentes especialidades."
                    botao="Saiba mais"
                />
                 <Card
                    titulo="Hospedagem"
                    imgUrl="/card-hospedagem.png"
                    desc="Espaços seguros para hospedar os pets durante o dia, incluindo áreas de recreação."
                    botao="Saiba mais"
                />
            </div>

        </section>
    )
}

export default Servicos;
