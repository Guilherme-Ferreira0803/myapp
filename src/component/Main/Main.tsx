import React, { useState, useEffect } from "react";
import AmbulanceGif from '../../assets/gif/ambulance.gif'
import Road from '../../assets/icons/Road.svg'
import LocationPopup from "../Permission/Permission";

import  {ObterStatusViatura} from "../../services/obterStatusViatura.services";

export default function Main(){

    const [title, setTitleName] = useState("");

    const navegarParaOutraTela = () => {
        window.location.href = '/cancel';
    };
    const atualizaStatusViatura = async ()=>{
        let obterStatus = await ObterStatusViatura(1,new Date('21/2/2024'));
        console.log(obterStatus);
        setTitleName(obterStatus);
    }

    setTimeout(atualizaStatusViatura, 20 * 1000);

    return (
        <main className=' h-[75%] flex flex-grow flex-col items-center justify-between '>
            <div className='w-screen h-full flex flex-col items-center justify-center gap-[20%]'>
                <div className=' h-[70px]'><h1 className='text-eco_dark_green text-title font-semibold text-center pl-4 pr-4'>{title}</h1></div>
                <div className='flex flex-col items-center justify-between h-[25%] w-[100vw]'>
                    <img className='h-[80%]' src={AmbulanceGif} alt="" />
                    <img className='w-[100%]' src={Road} alt="" />
                </div>
                <button className='bg-red px-[20%] py-[2%] text-white rounded-lg font-medium text-[1rem] shadow-shadow_btn' onClick={navegarParaOutraTela}>Cancelar atendimento</button>
            </div>
            <LocationPopup/>
        </main>
    );
}
    
