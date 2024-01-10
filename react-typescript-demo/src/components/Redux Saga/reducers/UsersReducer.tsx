import { IUsers } from "../types"

type stateProp = {
    users: IUsers[]
}

type actionProp = {
    type: 'GET_USERS_DATA'
    payload: [],
}

type updateActionProp = {
    type: 'reset',
}

const initialState:stateProp = {
    users: []
}
export const UserReducer = ( state=initialState, action: actionProp) => {
    //state=initialState
    switch (action.type) {
        case 'GET_USERS_DATA':
            return {...state, users: action.payload}
    
            default:
                return state;
    }
}