import { combineReducers } from 'redux';
import userReducer from './Counter/userReducer';

import counterReducer from './Counter/counter.reducer';


const rootReducer = combineReducers({

    counter: counterReducer,
    user: userReducer
});

export default rootReducer;