
function useLocalStorage() {
    const setLocalstortage=(dataName,setData)=>{
        localStorage.setItem(dataName,JSON.stringify(setData))
    }

    const getLocalStorage=(getName)=>{
      return  JSON.parse(localStorage.getItem(getName))
    }
    return{setLocalstortage,getLocalStorage}
}

export default useLocalStorage