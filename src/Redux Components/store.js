import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './CreateReducer';

const store = configureStore({
    reducer: {
        students: studentsReducer
    }
});

export default store;