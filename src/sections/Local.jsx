import { MapPin } from 'lucide-react';

const Local = () => {
  return (
    <section id="localizacao" className="bg-[#FFF8C2] pb-5">

        {/* Subtitulo da secao */}
        <div id="subtitle-local" className="p-3 lg:p-5">
            <h2 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">Localização</h2>
        </div>

        {/* Div que controla as duas colunas (desktop) ou 2 linhas (mobile) */}
        <div className='p-3 lg:p-6 lg:grid lg:grid-cols-2 justify-center items-center'>
            {/* Iframe da localizacao */}
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                    height: 0,
                }}
                >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6699.840022953697!2d-60.01031221505367!3d-3.1329386371643206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057715e51dc1%3A0x131a0659382fadd9!2sFederal%20Institute%20of%20Education%2C%20Science%20and%20Technology%20of%20Amazonas!5e0!3m2!1sen!2sbr!4v1743638074163!5m2!1sen!2sbr"
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '1px solid black',
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Texto da localizacao */}
            <div className='flex text-center justify-center items-center w-[100%] p-4'>
                <div>
                    <img src="/pin.png" alt="Localization" width={'150px'}/>
                </div>
                <p className='text-base'>
                    Estamos localizados na rua xxx, numero xx, proximo ao (ponto de referencia). Faça um <a href='https://wa.me/' target='_blank' className='text-amber-800 underline'>agendamento</a> ou venha trazer seu pet para uma visita!
                </p>
            </div>
        </div>
    </section>
  );
}

export default Local;