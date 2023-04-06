import { GET_PERSON } from "../actions"

const INITIAL_STATE = {
    infos: [],
}

export const personaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PERSON: 
        return {
            ...state,
            infos: action.infos,
        };

        default: 
        return state
  }
}