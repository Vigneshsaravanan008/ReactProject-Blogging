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
        console.log(error);
        return [];
    }
}
