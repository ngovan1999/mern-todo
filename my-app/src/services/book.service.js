import request from "../utils/configAxios";
const BASE_API = "http://localhost:5000/api/v1";

/**
 * create request get all list user
 * @param {*} params
 * @returns
 */
export function getAllBooksServices(params) {
  return request(`${BASE_API}/books`, {
    method: "GET",
    params: params,
  });
}

/**
 * create request remove user
 * @param {*} id
 * @returns
 */
export const deleteBookServices = (id) => {
  return request(`${BASE_API}/books/${id}`, {
    method: "DELETE",
  });
};

/**
 * create requst get detail user
 * @param {*} id
 * @returns
 */
export const getDetailBookServices = (id) => {
  return request(`${BASE_API}/books/${id}`, {
    method: "GET",
  });
};

/**
 * create request update user
 * @param {*} id
 * @param {*} body
 * @returns
 */
export const updateBookServices = (id, body) => {
  return request(`${BASE_API}/books/${id}`, {
    method: "PUT",
    data: body,
  });
};

export const createBookServices = (body) => {
  return request(`${BASE_API}/books`, {
    method: "POST",
    data: body,
  });
};
