import Card from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Servicos = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <section id="servicos" className="bg-[#E8C44F] p-10">

            <div id="subtitle-servicos" className="p-5">
                <h2 className="text-petbrown text-center text-3xl sm:text-4xl font-bold " style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Conheça nossos serviços
                </h2>
            </div>

            <Slider {...settings} className="p-5">
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
                    desc="Texto reservado para descricção de algum serviço que possa ser adicionado"
                    botao="Saiba mais"
                />

                <Card
                    titulo="Titulo"
                    imgUrl="/card-hospedagem.png"
                    desc="Texto reservado para descricção de algum serviço que possa ser adicionado"
                    botao="Saiba mais"
                />

                <Card
                    titulo="Titulo"
                    imgUrl="/card-hospedagem.png"
                    desc="Texto reservado para descricção de algum serviço que possa ser adicionado"
                    botao="Saiba mais"
                />
            </Slider>

        </section>
    )
}

export default Servicos;
