import {Link} from "react-router-dom";
import {Formik,Form,Field} from "formik";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {add} from "../services/studentService";

export default function Add(){
    const navigate= useNavigate()
    const [form,setForm]=useState({
        name:'',
        description:'',
        action:''
    })
    const dispatch= useDispatch()
    const handleSubmit=(values)=>{
            add(values,dispatch);
            alert('ok')
            navigate('/')
    }
    return(
        <div>
            <h1>ADD A NEW STUDENT</h1>
            <Formik initialValues={form}
                    onSubmit={(values) => handleSubmit(values)}>
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
                    <button> submit</button>
                    <Link to={'/'}>back</Link>
                </Form>

            </Formik>
        </div>
    )
}