const Cart=[]

const CartReducer=(state=Cart,action)=>{
    const product=action.payload
    switch(action.type) {
        case "ADDITEM":
                   const ProductFound=state.find((x)=>x.id===product.id);
                   if(ProductFound){
                       console.log(state.map((x)=>x.id===product.id ?{...x,qty:x.qty++}:x))
                    return state.map((x)=>x.id===product.id ?{...x,qty:x.qty++}:x)
                
                   }
                   else{
                    const product=action.payload;
                    console.log([...state,{...product,qty:1,}])
                       return [...state,{...product,qty:1,}]
                   }
        
        case "DELITEM":
            const ProductFound1=state.find((x)=>x.id===product.id);
            if(ProductFound1.qty===1){
                console.log(state.filter((x)=>x.id !==ProductFound1.id))
                return state.filter((x)=>x.id !==ProductFound1.id)
               
            }
            else{
                console.log(state.map((x)=>x.id===product.id?{...x,qty:x.qty-1}:x))
                return state.map((x)=>x.id===product.id?{...x,qty:x.qty-1}:x)
                
            }
            
    default: return state;
    }
    

}

export default CartReducer