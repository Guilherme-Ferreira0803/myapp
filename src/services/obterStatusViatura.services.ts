import { toast } from "react-toastify";
import {api} from "./_axios_service";

export async function ObterStatusViatura(numOc:number, dataOc:Date) {
    try{
        const response = await api.post("/ObterStatusOcorrencia",{
            "dataOcorrencia":dataOc,
            "numOcorrencia":numOc
        });
        const data = response.data;
        return data;
    }catch(error){
        toast.error("Não foi possível obter o status dessa ocorrência");
        return "Não foi possível encontrar essa Ocorrência"
    }
}