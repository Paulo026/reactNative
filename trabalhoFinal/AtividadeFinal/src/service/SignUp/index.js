import api from "../api";

export const getUsarioApi = () => {
	return api.get(`/usuario`).then((response) => response.data);
};		

export const putUsuarioApi = (id) => {
	return api.put(`/usuario/${id}`).then((response) => response.data);
};
    