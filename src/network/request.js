import axios from 'axios'
export function request(config){
    const interance=axios.create({
        baseURL:"http://123.207.32.32:8000",
        timeout:5000
    }) 
    //请求拦截
    interance.interceptors.request.use(config=>{
        return config
    },err=>{});
    //返回拦截
    interance.interceptors.response.use(config=>{
        return config.data
    },err=>{}
    
    );
    return interance(config)
}