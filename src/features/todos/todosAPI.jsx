import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodosAPI = function () {
    return axios
        .get(`${BASE_URL}?_limit=10`)
        .then(res => res.data);
};

export const addTodoAPI = function (todo) {
    return axios
        .post(BASE_URL, todo)
        .then(res => res.data);
};

export const updateTodoAPI = function (todo) {
    return axios
        .put(`${BASE_URL}/${todo.id}`, todo)
        .then(res => res.data);
};

export const deleteTodoAPI = function (id) {
    return axios
        .delete(`${BASE_URL}/${id}`)
        .then(() => id);
};
