import {qiu} from "./request"

export function demes (page){
    return qiu({
        url:"/detail",
        params:{
          page  
        }
    })
}