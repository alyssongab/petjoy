import { CirclePlus} from 'lucide-react';
import { useState } from 'react';

const FaqBox = ({ pergunta, resposta }) => {

    const[abrirResposta, setAbrirResposta] = useState(false);

    function handleResposta(){
        setAbrirResposta(!abrirResposta);
    }

    return(
        <div className="p-3">

            <div id="pergunta" className="bg-[#FFF188] rounded-lg">
                <div className="flex flex-row justify-between items-center p-2">
                    <p className="font-semibold text-sm w-[80vw]">{pergunta}</p>
                    <button onClick={handleResposta}><CirclePlus className='cursor-pointer'/></button>  
                </div>
            </div>
            <div id="resposta" className={`bg-[#FFF8C2] p-2 mt-[-3px] ${abrirResposta ? 'block' : 'hidden'}`}>
                {resposta}
            </div>
        </div>
    )
}

export default FaqBox;