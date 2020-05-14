import axios from "axios";

const instance = axios.create({
    baseURL: 'https://develop.rms-med.ru:39443/RMS/api/v1'
})

export const registerAPI = {
    async registerByToken(token) {
        let tokenData = {"registrationToken": token}
        return instance.post(`/register_by_token`, tokenData)
            .then((res) => {
                return res.data.data.user
            })
    },
    async sendSms(phone) {
        return instance.post('/register', {phone: phone})
            .then((res) => res.data)
    },
    async getCaptchaConfig(id) {
        return instance.get(`/register/${id}/captcha/configuration`)
            .then((res) => {
                return res.data
            })
    }, async captchaValidation(id, captchaId) {
        return instance.post(`/register/${id}/captcha/validate`, {key: 'web', token: captchaId})
            .then((res) => {
                return res.data
            })
    },
    async getSmsCode(id) {
        return instance.post(`/register/${id}/sendcode`, {})
            .then((res) => {
                return res.data.data.codeOtp
            })
    }, async confirmRegistration(id, dataFormServer) {
        return instance.post(`/register/${id}/confirm`, dataFormServer)
            .then((res) => {
                return res.data
            })
    },
}