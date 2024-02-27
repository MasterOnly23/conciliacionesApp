import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const UPLOAD_FILE_URL = `${API_URL}/upload/`;
const GET_NO_CONCILIADOS = `${API_URL}/conciliacion/`;
const DOWNLOAD_TEMPLATE = `${API_URL}/download`;

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(UPLOAD_FILE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getNoConciliados = async (bankName, period) => {
  return axios.get(`${GET_NO_CONCILIADOS}?bankName=${bankName}&period=${period}`);
};

const downloadTemplate = async (bankName, period) => {
  return axios.get(`${DOWNLOAD_TEMPLATE}?bankName=${bankName}&period=${period}`, { 
    responseType: 'blob',
  });
}

export { uploadFile,  getNoConciliados, downloadTemplate };
