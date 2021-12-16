import apiClient from './clientBasicAuth';

const endpoint = "/api/token";

const getToken = async (email, password) => {
    let response = await apiClient(email,password).get(endpoint);
    let error, token = '';
    if (!response.ok){error = "Unexpected error please Try again!"};
    if (response.status === 401){error = "Invalid Email/Password combo"};
    if (response.ok){token = response.data.token};
    return {"error":error, token};
};

export default getToken;