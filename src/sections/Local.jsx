import { MapPin } from 'lucide-react';

const Local = () => {
  return (
    <section id="localizacao" className="bg-[#FFF8C2]">

        {/* Subtitulo da secao */}
        <div id="subtitle-local" className="p-3 lg:p-5">
            <h2 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">Localização</h2>
        </div>

        {/* Div que controla as duas colunas (desktop) ou 2 linhas (mobile) */}
        <div className='p-3 lg:p-6 lg:grid lg:grid-cols-2 justify-center items-center'>
            {/* Iframe da localizacao */}
            <div id="mapa" className="p-3 lg:p-6 lg:grid lg:grid-cols-2 justify-center items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6699.840022953697!2d-60.01031221505367!3d-3.1329386371643206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057715e51dc1%3A0x131a0659382fadd9!2sFederal%20Institute%20of%20Education%2C%20Science%20and%20Technology%20of%20Amazonas!5e0!3m2!1sen!2sbr!4v1743638074163!5m2!1sen!2sbr"
                    width="600"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: '1px solid black' }}
                ></iframe>
            </div>

            {/* Texto da localizacao */}
            <div className='flex text-center justify-center items-center w-[80%]'>
                <div>
                    <img src="/pin.png" alt="Localization" width={'150px'}/>
                </div>
                <p className='text-xl'>
                    Estamos localizados na rua xxx, numero xx, proximo ao (ponto de referencia). Faça um <a href='https://wa.me/5592988016664' target='_blank' className='text-amber-800 underline'>agendamento</a> ou venha trazer seu pet para uma visita!
                </p>
            </div>
        </div>
    </section>
  );
}

export default Local;