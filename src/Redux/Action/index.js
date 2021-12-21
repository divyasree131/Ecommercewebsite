

export const AddCart=(product)=>{
    return{
        type:'ADDITEM',
        payload:product
    }
}

export const DelCart=(product)=>{
    return{
        type:'DELITEM',
        payload:product
    }
}
export const RemCart=(product)=>{
    return{
        type:'REMOVE',
        payload:product
    }
}