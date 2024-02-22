import { toast } from "react-toastify";
import {api} from "./_axios_service";

export async function obterDistanciaMetros(numOc:number, dataOc:Date, latitude:number, longitude:number) {
    try{
        const response = await api.post("/ObterDistancia",{
            "dataOcorrencia":dataOc,
            "numOcorrencia":numOc,
            "latitude":latitude,
            "longitude":longitude
        });
        const data = response.data;
        return data;
    }catch(error){
        toast.error("Não foi possível obter a distância em metros");
        return 0;
    }
}