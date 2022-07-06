import api from "../api";

export const getProductApi = () => {
	return api.get(`/produto`).then((response) => response.data);
};

export const getProductApiById = (id) => {
	return api.get(`/produto/${id}`).then((response) => response.data);
};

export const putProductApi = (id) => {
	return api.put(`/produto/${id}`).then((response) => response.data);
};

export const deleteProductApi = (id) => {
	return api.delete(`/produto/${id}`).then((response) => response.data);
};

export const createProductApi = () => {
	return api.post(`/produto`).then((response) => response.data);
};
