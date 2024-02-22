import React from "react";
import KriaLogo from '../../assets/icons/Kria.svg'

export default function SplashKria(){
return(
    <div className="w-[100vw] h-[100vh] flex items-center justify-center transition-opacity duration-500 ease-out-back">
        <img className=' w-[40%] transition-opacity' src={KriaLogo} alt="" />
    </div>
)
}