import apiClientWithToken from './clientTokenAuth'

const endpoint = "/post";

export const getPosts = async (token) =>{
    const response = await apiClientWithToken(token).get(endpoint)
    if (400 <= response.status && response.status < 500){return 400;}
    if (500 <= response.status && response.status < 600){return 500;}
    if (response.ok){return response.data.posts}
    return
}

export const getPostById = async (token,id)=>{
    const response = await apiClientWithToken(token).get(endpoint+'/category/'+id)
    if (400 <= response.status && response.status < 500){return 400;}
    if (500 <= response.status && response.status < 600){return 500;}
    if (response.ok){return response.data.posts}
    return
}

export const getPost = async (token,id)=>{
    const response = await apiClientWithToken(token).get(endpoint+'/'+id)
    if (400 <= response.status && response.status < 500){return 400;}
    if (500 <= response.status && response.status < 600){return 500;}
    if (response.ok){return response.data}
    return
}

export const postPost = async (token, data)=>{
    const response= await apiClientWithToken(token).post(endpoint, data);
    if (response.ok){return true}else{return false}
}

export const putpost = async (token, id, data)=>{
    const response= await apiClientWithToken(token).put(endpoint+"/"+id, data);
    if (response.ok){return true}else{return false}
}

export const deletePost = async (token, id)=>{
    const response= await apiClientWithToken(token).delete(endpoint+"/"+id);
    if (response.ok){return true}else{return false}
}