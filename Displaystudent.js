import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'

const Displaystudent = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        
        getdata()
    },[])
    const getdata=  async()=>{
        try
        {

        
        const result= await axios.get('http://localhost:5000/student/displaystud')
        setData(result.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }
    const deleteStudent=async (id)=>{
        alert(id)
        let result =await axios.delete('http://localhost:5000/student/delete/${id}')
        if(result){
            alert('student data deleted!')
            getdata()
        }
    }
    const studentrecord = data.map((d)=>{
        return(
            <tr>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.username}</td>
                <td>{d.password}</td>
                <td><NavLink to={`/UpdateStudent/`+d._id}>Edit</NavLink></td>
                <td><button onClick={()=>deleteStudent(d._id)}>DELETE</button></td>

            </tr>
        )
    })

    return(
        <div>
            <table className='table table-hover'>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                </tr>
                {studentrecord}
            </table>

        </div>
    )
}


export default Displaystudent