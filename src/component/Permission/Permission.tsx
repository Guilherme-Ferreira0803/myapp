import React, { useState, useEffect } from 'react';
import LocationIcon from '../../assets/icons/Location.svg';
import {obterDistanciaMetros} from "../../services/obterDistanciaMetros.services";
import ConfirmarDistanciaPopup from '../Popup/ConfirmacaoDistanciaPopup';
let teste = 0;



const LocationPopup: React.FC = () => {

 const[distancia, setDistancia] = useState(180);

  const [showPopup, setShowPopup] = useState(true);
  const [showPopupConfirmacao, setShowPopupConfirmacao] = useState(false);

  const [trackingLocation, setTrackingLocation] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  
  const AtualizaDistancia = /*async*/ (latitude:number, longitude:number)=>{
    //const distanciaMetros = await obterDistanciaMetros(1,new Date('21/2/2024'),latitude,longitude);
    
      if (distancia >= 150){
        setShowPopupConfirmacao(true);
        teste = teste + 1;
        setDistancia(distancia - 10) ;
        console.log(distancia);
        
      }else{
        setShowPopupConfirmacao(false);
      }
  }

  const handleAccept = () => {

    if (!trackingLocation) {
      setTrackingLocation(true);
    }

    setShowPopup(false);
  }



  const handleDecline = () => {
    console.log('Permissão de localização recusada');
    setTrackingLocation(false);
    setShowPopup(false);
  };

  useEffect(() => {
    const getLocationPeriodically = /*async*/ () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          /*await*/ AtualizaDistancia(latitude,longitude)
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error('Erro ao obter a localização:', error.message);
        }
      );
    };
  
    let intervalId: number | null = null;
  
    const startTrackingLocation = () => {
      //setTimeout(() => getLocationPeriodically, 2 * 100)
      getLocationPeriodically();
      intervalId = window.setInterval(getLocationPeriodically, 5 * 1000);
    };
  
    const stopTrackingLocation = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
  
    if (trackingLocation) {
      startTrackingLocation();
    } else {
      stopTrackingLocation();
    }

    return () => {
      stopTrackingLocation();
    };
  },[trackingLocation]);
  

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black_light z-20 ${
          showPopup ? 'visible' : 'invisible'
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className="bg-white p-6 mx-8 rounded shadow-md flex items-start">
          <img src={LocationIcon} alt="" />
          <div>
            <p className="text-black font-medium text-[1.10rem]">
              Permita que o aplicativo Ecovias rastreie sua localização para concluir o atendimento?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 font-bold text-[#7F7E7E] px-4 py-2 rounded"
                onClick={handleDecline}
              >
                Cancelar
              </button>
              <button
                className="bg-blue-500 font-bold text-eco_dark_green px-4 py-2 rounded mr-2"
                onClick={handleAccept}
              >
                Permitir
              </button>
            </div>
          </div>
        </div>
      </div>
           <ConfirmarDistanciaPopup teste={teste}/>
        
    </>
);
};

export default LocationPopup;
