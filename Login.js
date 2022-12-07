import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () =>{
    let navigate = useNavigate()
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const handleUserChange=(e)=>{
        setUsername(e.target.value)
    }
    const handlepassChange=(e)=>{
        setPassword(e.target.value)
    }
    const collectData= async()=>{
        try{
            let logindata= axios.post('http://localhost:5000/login/login',{
                username,
                password
            }) 
            logindata = (await logindata).data;
            alert(logindata.name)
            if(logindata.name){
                localStorage.setItem("login",JSON.stringify(logindata))
                navigate('/',{replace:true})
                navigate(0)
            }else{
                alert('login or password is incorrect')
            }
        }catch(error){
            console.log('error')
        }
    }
    return(
        <div className='App'>
            <header className='App-header'>
            <h3>Login Page</h3>
            <label>
                Username:-
            </label><br/>
            <input type="text" name='username' value={username} required onChange={(e)=>handleUserChange(e)} /><br/>
            <label>
                Password:-
            </label><br/>
            <input type="password" name='password' value={password} required onChange={(e)=>handlepassChange(e)} /><br/>
            <button onClick={collectData} type='button'>LOgin</button>
            </header>
        </div>
    )
}



export default Login