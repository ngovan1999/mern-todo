import request from "../utils/configAxios";
const BASE_API = "http://localhost:5000/api/v1";

/**
 * create request get all list user
 * @param {*} params
 * @returns
 */
export function loginRequestServices(params) {
  return request(`${BASE_API}/users/Login`, {
    method: "POST",
    data: params,
  });
}

export function RegisterRequestServices(params) {
  return request(`${BASE_API}/users/Register`, {
    method: "POST",
    data: params,
  });
}
