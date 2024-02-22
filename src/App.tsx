import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import LocationPopup from './component/Permission/Permission';
import SplashEco from './component/Splash/SplahEco';
import Footer from './component/Footer/Footer';
import Cancel from './component/Cancel/Cancel';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);


    return () => clearTimeout(timer);
    
  }, []);

  return (
    <>
      {loading ? (
        <SplashEco />
      ) : (  
      <div className=' h-[100vh] flex-col justify-between'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
      )}
    </>
  );
}
export default App;
