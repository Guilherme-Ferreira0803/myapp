import KriaIcon from '../../assets/icons/Kria.svg'
import EcoIcon from '../../assets/icons/Ecovias.svg'
import PhoneIcon from '../../assets/icons/Phone.svg'
import WhatsappIcon from '../../assets/icons/Whatsapp.svg'

export default function Footer(){
    return(
        <div className=" h-[10vh] flex justify-between px-[5%] ">
            <img className='w-[20%] py-[1%]' src={KriaIcon} alt="" />
            <img className='w-[20%] py-[1%]' src={EcoIcon} alt="" />
            <div className='flex justify-center items-center flex-col w-[30%] gap-[10%] '>
                <div className='flex mb-[2%] gap-[0.5rem] items-center'>
                    <img src={PhoneIcon} alt="" />
                    <p className='text-[#888888] text-[50%]'>+55(11)0000-0000</p>
                </div>
                <div className='flex gap-[0.5rem]'>
                    <img src={WhatsappIcon} alt="" />
                    <p className='text-[#888888] text-[50%]'>+55(11)0000-0000</p>
                </div>
            </div>
        </div>
    )
}