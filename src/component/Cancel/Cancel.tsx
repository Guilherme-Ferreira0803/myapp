import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Road from '../../assets/icons/Road.svg'
import React from 'react';

export default function Cancel()
{
    return(
        <div className='h-[100vh]'>
            <Header/>
            <main className=' h-[75%] flex flex-grow flex-col items-center justify-between '>
                <div className='w-screen h-full flex flex-col items-center justify-center gap-[20%]'>
                    <div className=' h-[70px]'><h1 className='text-eco_dark_green text-title font-semibold text-center pl-4 pr-4'>Solicitação Cancelada</h1></div>
                    <div className='flex flex-col items-center justify-between h-[25%] w-[100vw]'>
                        <img className='w-[100%]' src={Road} alt="" />
                    </div>
                </div>
            </main>
            <Footer/>
        </div>  
    );
}