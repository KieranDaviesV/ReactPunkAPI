import { CHANGE_TAB } from "../constants/action.const";


const tabReducer = (state = 0, action:any) =>{
    switch(action.type){
        case CHANGE_TAB:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default tabReducer;