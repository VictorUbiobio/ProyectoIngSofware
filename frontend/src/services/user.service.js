import axios from "./root.service.js";

export const createFormulario = async (data) => {
    try {
        const response = await axios.post("/userId/formulario", data);
        const { status, data} = response;
        if (status === 200) {
            return {state: 'success', data: data};
        }else {
            return {state: 'error',};
        }
    }catch (error) {
        return {state: 'error',};
    }
};