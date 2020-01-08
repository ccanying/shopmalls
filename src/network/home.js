import {request,qiu} from './request'
 export function getHomeMutidata(){
     return request({
        url:"/home/multidata"
     })
 }
 export function getHomeGoods(type,page){
    return qiu({
        url:"/home",
        params:{
            type,
            page
        }
     })
 }