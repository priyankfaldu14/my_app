
export const counterReducer =(state,action)=>{
    console.log(state,action);
    if(action.type === "ADD"){
        state.push(action.obj)
    }else if(action.type === 'DELETE'){
        state.splice(action.id,1)
    }else if(action.type === 'EDIT'){
        state.splice(action.id,1,action.obj)
    }
    return [...state]
}