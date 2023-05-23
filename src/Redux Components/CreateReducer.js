import { createSlice } from '@reduxjs/toolkit';

const students = [];

const studentsSlice = createSlice({
    name: 'students',
    initialState: students,
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload);
        },
        updateStudent(state, action) {
            const { name, age, course, batch } = action.payload
            const existingUser = state.find((student) => student)
            if (existingUser) {
                existingUser.name = name
                existingUser.age = age
                existingUser.course = course
                existingUser.batch = batch
            }
        }
    },
});

export const { addStudent, updateStudent } = studentsSlice.actions;
export default studentsSlice.reducer;