import {createStore} from 'redux';
import reducer from '../reducers';
var defaultstate = {
  count :0,
}
export var configurestore=(initialstate = defaultstate)=>{
  return createStore(reducer,initialstate);
}
