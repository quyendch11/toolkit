import {Link, useParams} from "react-router-dom";
import {Formik,Form,Field} from "formik";
import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getStudentById, update} from "../services/studentService";
import {useNavigate} from "react-router";

export default function Edit(){
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {id}=useParams()
    const {student} = useSelector(state=> {
        return state.students
    })
    useEffect(()=> {
        getStudentById(id,dispatch)
    },[])

    const handleSubmit=(values)=>{
      update(id, dispatch,values);
      alert('ok')
      navigate('/')
    }
    return(
        <div>
            <h1>ADD A NEW STUDENT</h1>
            <Formik initialValues={student}
                    enableReinitialize={true}
                    onSubmit={handleSubmit}>
                <Form>
                    <label>name</label>
                    <Field
                        type="text"
                        name="name"
                    />
                    <label>description</label>
                    <Field
                        type="text"
                        name="description"
                    />
                    <label>action</label>
                    <Field
                        type="text"
                        name="action"
                    />
                    <button>Submit</button>
                    <button><Link to={'/'}>BACK</Link></button>
                </Form>
            </Formik>
        </div>
    )
}