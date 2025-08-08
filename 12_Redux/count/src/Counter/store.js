import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './Slice';

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer,
    }
});

