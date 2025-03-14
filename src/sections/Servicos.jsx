import Card from "../components/Card";

const Servicos = ({ cards }) => {
    return(
        <section id="servicos" className="bg-[#E8C44F] flex flex-col pb-10">

            <div id="subtitle-servicos">
                <h2 className="text-petbrown text-2xl sm:text-4xl font-bold p-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Conheça alguns de nossos serviços
                </h2>
            </div>

            <div id="cards" className="flex p-6 items-center justify-around">
                <Card
                    titulo="Banho e Tosa"
                    imgUrl="/card1.png"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus."
                    botao="Saiba mais"
                />
                <Card/>
                <Card/>
            </div>

        </section>
    )
}

export default Servicos;
