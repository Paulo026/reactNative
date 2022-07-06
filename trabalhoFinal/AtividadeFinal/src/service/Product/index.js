import api from "../api";

export const getProductApi = () => {
	return api.get(`/produto`).then((response) => response.data);
};		

export const putProductApi = (id) => {
	return api.put(`/produto/${id}`).then((response) => response.data);
};