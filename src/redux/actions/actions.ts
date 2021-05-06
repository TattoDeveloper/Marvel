import { getData } from './../../services/user/hero.service';
import { LOADING, LOAD_DATA, LOAD_DATA_FAILED, LOAD_DATA_SUCCESS } from './actions-type';


const loading = () => ({
  type: LOADING,
  payload: true
})

const  loadSuccess= ( data: any) =>(
  {
    type: LOAD_DATA_SUCCESS,
    payload: data
  }
);

const  loadFailed= ( data: any) =>(
  {
    type: LOAD_DATA_FAILED,
    payload: data
  }
);


export const loadData = () =>{
  return async ( dispatch: Function )=> {
        dispatch(loading());
       try{
         const response = await getData();
         dispatch(loadSuccess(response));
       }catch( error ){
         dispatch(loadFailed({isError:true, message: error.message}))
       }
  }
}