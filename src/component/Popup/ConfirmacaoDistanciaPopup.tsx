import { useEffect, useState } from 'react';

type TConfirmarDistanciaPopup = {teste:number}
export default function ConfirmarDistanciaPopup(props:TConfirmarDistanciaPopup) {
    const [mostrarPopup, setMostrarPopup] = useState(false);

    const fecharPopup = () => {
        setMostrarPopup(false);
    };

    useEffect(() =>{

        console.log(props.teste)
        
        
        //setTimeout(() =>setMostrarPopup(true), 2000);
        setMostrarPopup(true)

    },[props.teste])


    useEffect(() => {console.log("Mostrat popup?:" + mostrarPopup)},[mostrarPopup])



    return (
        <>
            {mostrarPopup ? (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black_light z-20">
                    <div className="bg-white p-6 mx-8 rounded shadow-md flex items-start">
                        <div>
                            <p className="text-black font-medium text-[1.10rem]">
                                Foi constatado que você está se distanciando do local da ocorrência. Deseja continuar com o atendimento?
                            </p>
                            <div className="flex justify-end">
                                <button
                                    onClick={fecharPopup}
                                    className="bg-red-500 font-bold text-[#7F7E7E] px-4 py-2 rounded"
                                >
                                    Não
                                </button>
                                <button
                                    className="bg-blue-500 font-bold text-eco_dark_green px-4 py-2 rounded mr-2"
                                >
                                    Sim
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
