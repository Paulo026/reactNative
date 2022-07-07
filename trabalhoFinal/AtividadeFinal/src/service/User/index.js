import api from "../api";

export const getUserApi = () => {
	return api.get(`/usuario`).then((response) => response.data);
};

export const getUserApiById = (id) => {
	return api.get(`/usuario/${id}`).then((response) => response.data);
};

export const putUserApi = (id) => {
	return api.put(`/usuario/${id}`).then((response) => response.data);
};

export const deleteUserApi = (id) => {
	return api.delete(`/usuario/${id}`).then((response) => response.data);
};

export const createUserApi = () => {
	return api.post(`/usuario`).then((response) => response.data);
};
