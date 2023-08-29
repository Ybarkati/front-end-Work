import { useNavigate, useParams } from "react-router-dom"



export default function Show(){
    const params=useParams()
    // const navigate=useNavigate()
    // if (params.id="*"){
    //     navigate("/dashboard/courses/")
    // }
   return(
    <div>
        {params.id}
    </div>
   )
}