import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getStudents, remove} from "../services/studentService";
function List(){
    const navigate= useNavigate()
    const {students} = useSelector(state => {
        return state.students
    })
    const dispatch = useDispatch()
    useEffect(() => {
        getStudents(dispatch)
    }, [students])
const handleDelete=(id)=>{
    remove(id)
}
    return(
        <div>
            <h1>STUDENT LIST</h1>
            <button><Link to={'/add'}>ADD NEW STUDENT</Link></button>
            {students.map(student=>(
                <h2 key={student.id}>
                    {student.name}:
                    {student.description}:
                    {student.action}
                    <Link to={`edit/${student.id}`}>EDIT</Link>
                    <button  onClick={()=>handleDelete(student.id)}>delete</button>
                </h2>
            ))}
        </div>
    )
}
export default List