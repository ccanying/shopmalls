import axios from 'axios'
export function request(config){
    const interance=new axios.create({
        //baseURL:"http://123.207.32.32:8000",
        baseURL:"http://adi-v3.dev",
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