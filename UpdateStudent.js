import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useEffect } from "react";


const UpdateStudent = () => {
    
    let navigate = useNavigate();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const params=useParams()
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    const handleUsername = (e)=>{
        setUsername(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const dispData = async () =>{
        alert(params.id)
        let result =await axios.get(`http://localhost:5000/student/getOneStudent/.${params.id}`)
        alert(result.data.name)
        // setName(result.data.name)
        // setEmail(result.data.email)
    }
    useEffect(()=>{
        dispData()
    },[])
    const collectData= async()=>{
        
    }
    return(
        <div className="App">
            <header className="App-header">
                <h3>Update Student </h3>
                <label>
                    Name:
                </label><br/>
                <input type="text" name='name' value={name} onChange={(e)=>handleName(e)} required / ><br/>
                <label>
                    Email:
                </label><br/>
                <input type="email" name="email" value={email} required onChange={(e)=>handleEmail(e)}/ ><br/>
                <label>
                    Phone:
                </label><br/>
                <input type="text" name="phone" value={phone} required onChange={(e)=>handlePhone(e)}/ ><br/>
                <label>
                    Username:
                </label><br/>
                <input type="text" name="username" value={username} required onChange={(e)=>handleUsername(e)}/ ><br/>
                <label>
                    Password:
                </label><br/>
                <input type="password" name="password" value={password} required onChange={(e)=>handlePassword(e)}/ ><br/>
                <button type='button' onClick={collectData}>UPDATE</button>
            </header>
        </div>
    )
}


export default UpdateStudent