import React, { useState, useEffect } from "react";
import EcoLogo from '../../assets/icons/Ecovias.svg'
import SplashKria from './SplashKria';

const SplashEco= () =>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000)

        return () => clearTimeout(timer);
    }, []);

    return(
        <>
        {loading ? (
            <SplashKria/>
            ) : (
            <div className="w-[100vw] h-[100vh] flex items-center justify-center transition-opacity duration-500 ease-out-back">
                <img className=' w-[40%] transition-opacity' src={EcoLogo} alt="" />
            </div>
        )}
        </>
    )
}
export default SplashEco;