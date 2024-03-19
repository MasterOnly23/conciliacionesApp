import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const GET_NO_CONCILIADOS = `${API_URL}/conciliacion/`;

const getHistorial = async (bankName, period, action, limit) => {
  return axios.get(
    `${GET_NO_CONCILIADOS}?action=${action}&bankName=${bankName}&period=${period}&limit=${limit}`
  );
};

const exportExcel = async (action, fileId) => {
  return axios.get(
    `${GET_NO_CONCILIADOS}?action=${action}&fileId=${fileId}`, {
    responseType: 'blob' 
    }
  );
};

export { getHistorial, exportExcel };
