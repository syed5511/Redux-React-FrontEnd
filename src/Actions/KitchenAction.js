import {PENDING,ERROR,KITCHEN_LIST,KITCHEN_SIGNUP,KITCHEN_STATE_CITY} from './action.types'
import axios from "axios";





export function KitchenListFetchAction(params) {

  return async dispatch => {
      dispatch({
          type:PENDING,
      })

      try {

          const KitcthenList = await axios({
              method: 'get',
              url: `http://localhost:3001/Kitchen/AllKitchen_fromCache`,
              data: params,
              config: {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                }
              }
            }) .then(res => res);
            dispatch({
              type: KITCHEN_LIST,
              payload:KitcthenList,
            
            });

      } catch(err) 

      {
          dispatch({
            type: ERROR,
            error: err.message,
          });
        }



  }

}





export function KitchenSignupSubmitAction(params) {

  return async dispatch => {
      dispatch({
          type:PENDING,
      })

      try {

          const KitcthenSignup = await axios({
              method: 'post',
              url: `http://localhost:3001/kitchen/KitchenSignup`,
              data: params,
              config: {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                }
              }
            }) .then(res => res);
            dispatch({
              type: KITCHEN_SIGNUP,
              payload:KitcthenSignup,
            
            });

      } catch(err) 

      {
          dispatch({
            type: ERROR,
            error: err.message,
          });
        }



  }

}


export function KitchenStateCityFectchAction(params) {

  console.log("hello test")
  return async dispatch => {
      dispatch({
          type:PENDING,
      })

      try {

          const KitcthenStateCity = await axios({
              method: 'get',
              url: `http://localhost:3001/StateCities/AllStateCity`,
              data: params,
              config: {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                }
              }
            }) .then(res => res);
            dispatch({
              type: KITCHEN_STATE_CITY,
              payload:KitcthenStateCity,
            
            });

      } catch(err) 

      {
          dispatch({
            type: ERROR,
            error: err.message,
          });
        }



  }

}
