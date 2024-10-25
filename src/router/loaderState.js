export const loaderState=(value)=>{
    if(value){
        document.documentElement.style.setProperty("--display-loader",'flex')
    }else{
        document.documentElement.style.setProperty("--display-loader",'none')
    }
}

