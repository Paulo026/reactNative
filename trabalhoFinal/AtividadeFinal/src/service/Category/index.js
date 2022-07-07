import api from "../api";

export const getCategoryApi = () => {
	return api.get(`/categoria`).then((response) => response.data);
};

export const getCategoryApiById = (id) => {
	return api.get(`/categoria/${id}`).then((response) => response.data);
};

export const putCategoryApi = (id) => {
	return api.put(`/categoria/${id}`).then((response) => response.data);
};

export const deleteCategoryApi = (id) => {
	return api.delete(`/categoria/${id}`).then((response) => response.data);
};

export const createCategoryApi = (categoryName, categoryImage) => {
	return api
		.post(`/categoria`, { nome: categoryName, foto: categoryImage })
		.then((response) => response.data);
};
