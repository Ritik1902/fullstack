import React,{useEffect}  from "react";
import {useNavigate} from 'react-router-dom'


const Logout = () => {
    let navigate = useNavigate()
    useEffect(()=>{
        localStorage.clear();
        navigate('/',{replace:true})
        navigate(0)

    },[])
    return (
        <div>



        </div>
    )
}

export default Logout