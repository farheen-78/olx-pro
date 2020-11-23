const INITIAL_STATE={

    current_user:{ }
    
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
    // case "setdata":
    //     return({
    //         ...state,
    //         users:[...state.users,action.data]

    //     })
        case "setUser":
        return({
            ...state,
            current_user:action.payload
        })
        default:
    return state;

    }
}