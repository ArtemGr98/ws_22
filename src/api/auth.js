import {instance} from "./instance";

const authAPI = {
    authMe: async () => {
        const response = await instance.get(`auth/me`)
        return response.data
    },
    login: async loginData => {
        const response = await instance.post(`/auth/login`, {
            email: loginData.email,
            password: loginData.password,
            rememberMe: loginData.rememberMe,
            captcha: loginData.captcha
        })
        return response.data
    },
    logout: async () => {
        const response = await instance.delete(`/auth/login`)
        return response.data
    },
    getCaptchaUrl: async () => {
        const response = await instance.get('/security/get-captcha-url')
        return response.data
    }
}

export default authAPI