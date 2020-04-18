import {PENDING,ERROR,KITCHEN_LIST,KITCHEN_SIGNUP,KITCHEN_STATE_CITY} from '../Actions/action.types'


const initialState ={
    pending:false,
    results:[],
    error:null
};



export const KichenReducers = function (state = initialState, action) {
    switch (action.type) {
    case PENDING:
      return {
        ...state,
        pending: true
      };
  
          case KITCHEN_LIST:
          return {
            ...state,
            pending: false,
            results: action.payload
          };

          case KITCHEN_SIGNUP:
            return {
              ...state,
              pending: false,
              signup: action.payload
            };

            case KITCHEN_STATE_CITY:
            return {
              ...state,
              pending: false,
              results: action.payload
            };

          
    case ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
  
   
  
    default:
      return state;
    }
  };
  
  