import {  LOADING, LOAD_DATA_SUCCESS, LOAD_DATA_FAILED  } from '../actions/actions-type'

const initialState ={
    data: {},
    loading: false,
    error:{
      isError: false,
      message: ''
    }
}

interface Action{
  type: string
  payload: any
}



export  const userReducer = (state=initialState, action: Action) =>{
        switch(action.type){
         case LOADING:
            return {...state, loading: action.payload, };
          case LOAD_DATA_SUCCESS:
            return {...state, currentUser: action.payload, loading: false}
          case LOAD_DATA_FAILED:
              return {...state, error: action.payload, loading: false}
          default:
           return state;
        }
}