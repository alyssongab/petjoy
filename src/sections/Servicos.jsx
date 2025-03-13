import Card from "../components/Card";

const Servicos = ({ cards }) => {
    return(
        <section id="servicos" className="bg-[#E8C44F] flex flex-col">

            <div id="subtitle-servicos">
                <h2 className="text-petbrown text-xl sm:text-2xl font-semibold p-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Conheça alguns de nossos serviços
                </h2>
            </div>

            <div id="cards" className="flex justify-around">
                {cards}
            </div>

        </section>
    )
}

export default Servicos;
