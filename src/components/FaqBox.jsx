import { CircleMinus, CirclePlus} from 'lucide-react';
import { useState } from 'react';

const FaqBox = ({ pergunta, resposta }) => {

    const[abrirResposta, setAbrirResposta] = useState(false);

    function handleResposta(){
        setAbrirResposta(!abrirResposta);
    }

    return(
        <div className="m-auto md:w-[80vw] lg:w-[45vw]">

            <div id="pergunta" className="p-1 lg:p-2 bg-[#FFF188] rounded-lg">
                <div className="flex flex-row justify-between items-center p-2">
                    <p className="font-semibold text-sm w-[65vw] lg:w-[38vw] lg:text-base xl:text-lg">{pergunta}</p>
                    <button onClick={handleResposta}>
                        {!abrirResposta ? 
                        <CirclePlus className='cursor-pointer'/>
                        :
                        <CircleMinus className='cursor-pointer'/>
                        }
                        </button>  
                </div>
            </div>
            <div id="resposta" 
                className={`bg-[#FFF8C2] p-3 mt-[-5px] overflow-hidden transition-all duration-300 ease-in-out
                ${abrirResposta ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0 p-0'}`}>
                {resposta}
            </div>
        </div>
    )
}

export default FaqBox;