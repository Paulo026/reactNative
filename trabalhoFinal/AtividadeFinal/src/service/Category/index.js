import api from "../api";

export const getCategoryApi = () => {
	return api.get(`/categoria`).then((response) => response.data);
};		

export const putCategoryApi = (id) => {
	return api.put(`/categoria/${id}`).then((response) => response.data);
};
    