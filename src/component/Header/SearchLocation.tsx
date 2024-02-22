import React from 'react';
import MapIcon from '../../assets/icons/Map.svg'
import EditIcon from '../../assets/icons/Edit.svg'

export default function SearchLocation(){
return(
    <div className=' w-[80%] h-8 flex items-center justify-between '>
        <img className=' ml-[2%] z-10' src={MapIcon} alt="" />
        <input className='absolute w-[80%] h-8 rounded-lg text-center text-[#616161f5] text-[65%] font-medium' placeholder='(6,9 km) via Complexo Viário Ayrton Senna'/>
        <img className=' mr-[2%] z-10' src={EditIcon} alt="" />
    </div>
)
}