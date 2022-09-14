import axios from "axios";
import {getOne, students} from "../redux/slices/studentslice";

const URL_BASE = 'http://localhost:3001/'

export const getStudents = async (dispatch) => {
    const response = await axios.get(URL_BASE + 'students')
    dispatch(students({
        students: response.data
    }))
}

export const getStudentById = async (id,dispatch) => {
    const response = await axios.get(URL_BASE + 'students/'+`${id}`)
    dispatch(getOne({
        student: response.data
    }))
}
export const add=async (values,dispatch)=>{
    await axios.post(URL_BASE + 'students',values)
}
export const update=async (id, dispatch, values)=>{
    await axios.put(URL_BASE + 'students/'+`${id}`, values)
}
export const remove=async (id,dispatch)=>{
    await axios.delete(URL_BASE + 'students/'+`${id}`)
}