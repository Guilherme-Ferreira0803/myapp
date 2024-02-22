import React from 'react';
import SearchLocation from './SearchLocation';

export default function Header(){

    const estiloTexto = "text-[70%] font-semibold"
    return(
        <header className='w-screen bg-eco_dark_green rounded-b-lg flex flex-col justify-center items-center h-[15%] gap-[10%]'>
            <div className='flex flex-col justify-center items-center'>
                <p className= {estiloTexto}>Boa Noite, Vamos te ajudar!</p>
                <p className={estiloTexto}>Confira se o endereço abaixo está correto.</p>
            </div>
            <SearchLocation/>
        </header>
    )
}