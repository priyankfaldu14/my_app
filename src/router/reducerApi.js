import axios from "axios";

export const reducer =(state,action)=>{
    console.log(state,action);

    const getData =()=>{
         return axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res)=>{
            return [...res.data.data]
        })
    }
    
    switch(action.type){
        case "GET":
           return getData()

        case "ADD":
           return axios.post('https://student-api.mycodelibraries.com/api/user/add',action.formdata).then((res)=>{
            console.log(res.data);
           })

        case "UPDATE":
           return axios.post('https://student-api.mycodelibraries.com/api/user/update',action.formdata).then((res)=>{
            console.log(res.data);
           })
           
        case "DELETE":
            return axios.delete("https://student-api.mycodelibraries.com/api/user/delete?id="+action.id).then((res)=>{
              return  getData()
            })

        default:
            return state;
    }
}