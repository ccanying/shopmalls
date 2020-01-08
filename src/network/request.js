import axios from 'axios'
export function request(config){
    const interance=new axios.create({
        //baseURL:"http://123.207.32.32:8000",
        baseURL:'http://123.207.32.32:8000/api/v1',
        timeout:5000
    }) 
    //请求拦截
    interance.interceptors.request.use(config=>{
        return config
    },err=>{

        return err
    });
    //返回拦截
    interance.interceptors.response.use(config=>{
        return config.data
    },err=>{
        //response返回数据错误
        if(err&&err.response){
            //响应状态码
            switch(err.status){
                case 400:
                    err.message="请求错误"
                    break
                case 401:
                    err.message="未经授权"
                    break
            }
            return err
        }
    }
    
    );
    return interance(config)
}
export function qiu(config){
    const interance=new axios.create({
        //baseURL:"http://123.207.32.32:8000",
        baseURL:'http://127.0.0.1:8081/',
        timeout:5000
    }) 
    //请求拦截
    interance.interceptors.request.use(config=>{
        return config
    },err=>{

        return err
    });
    //返回拦截
    interance.interceptors.response.use(config=>{
        return config.data
    },err=>{
        //response返回数据错误
        if(err&&err.response){
            //响应状态码
            switch(err.status){
                case 400:
                    err.message="请求错误"
                    break
                case 401:
                    err.message="未经授权"
                    break
            }
            return err
        }
    }
    
    );
    return interance(config)
}