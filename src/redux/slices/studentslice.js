import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    students: [],
    student: {
        name: '',
        description: '',
        action: ''
    }
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        students: (state, action) => {
            state.students = action.payload.students
        },
        getOne: (state, action) => {
            state.student = action.payload.student
        },
        add:(state,action)=>{
              state.students.push(action.payload.student)
        },
        edit:(state,action)=>{
             state.students = action.payload.students
        },
        deletebyId:(state,action)=>{
            state.students= state.students.filter(student=>student.id !==action.payload.student.id)
        }
    }
})

export const {
    students,
    getOne,
    add,
    edit,
    deletebyId
} = studentSlice.actions

export default studentSlice.reducer