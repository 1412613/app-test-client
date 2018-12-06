import axios from "axios";

const API_URL = 'https://testpv1402.herokuapp.com';
export default function callerApi(endpoint, method = 'get', body = {}) {
    return new Promise((resolve)=>{
        axios({
            method: method,
            url: API_URL + `/${endpoint}`,
            data: body,
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            console.log(err);
        })
    })
}