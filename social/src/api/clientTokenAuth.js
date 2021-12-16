import { create } from "apisauce";
import base64 from "base-64";

const apiClientWithToken = (token) => create(
    {
        baseURL: "http://127.0.0.1:5000",
        headers:{
            Authorization: "Bearer " + token
        }
    }
);

export default apiClientWithToken
