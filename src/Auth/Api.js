import axios from "axios"
axios.defaults.baseURL = process.env.REACT_APP_API_URL

export const LoginApi = async (datas) => {
    try {
        const config = {
            method: "post",
            url: "login",
            data: datas
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(error);
        return []
    }
}

export const GoogleLoginApi = async (datas) => {
    try {
        const config = {
            method: "post",
            url: "google-login",
            data: datas,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(error);
        return []
    }
}

export const RegisterApi = async (datas) => {
    try {
        const config = {
            method: "post",
            url: "register",
            data: datas
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(error);
        return []
    }
}

export const GetProfile = async (token) => {
    try {
        const config = {
            method: "get",
            url: "profile",
            headers: { "Authorization": `Bearer ${token}` }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        return error.response.status;
    }
}

export const GetBlog = async (token) => {
    try {
        const config = {
            method: "post",
            url: "/blog/posts",
            headers: { "Authorization": `Bearer ${token}` }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const GetBlogCreate = async (datas, token) => {
    try {
        const config = {
            method: "post",
            url: "/blog/create",
            data: datas,
            headers: { "Authorization": `Bearer ${token}` }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const GetBlogEdit = async (id, token) => {
    try {
        const config = {
            method: "post",
            url: "/blog/edit",
            data: {
                'id': id
            },
            headers: { "Authorization": `Bearer ${token}` }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const GetBlogUpdate = async (datas, token) => {
    try {
        const config = {
            method: "post",
            url: "/blog/update",
            data: datas,
            headers: { "Authorization": `Bearer ${token}` }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
