import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";



const Update=()=>{

  const [val,setval] =useState([]);
  const navigate =useNavigate();

  const loaddata=()=>{
    let api="http://localhost:8000/students/studentUpdate";
    axios.get(api).then((res)=>{
      setval(res.data);
    })
  }


  useEffect(()=>{
    loaddata();
  },[])

 const myedit=(id)=>{
  navigate(`/edit/${id}`)
 }

  const mydel=(id)=>{
   let api="http://localhost:8000/students/studentDelete";
   axios.post(api,{id:id}).then((res)=>{
    alert("data deleted sucessfully");
    loaddata();
   })
  }

  let ans = val.map((key)=>{
    return(
      <>
        <tr>
          <td>{key.empno}</td>
          <td>{key.empname}</td>
          <td>{key.degisnation}</td>
          <td>{key.salary}</td>
          <td>
            <a href="">
              <button onClick={()=>{mydel(key._id)}}>Delete</button>
            </a>

            <a href="">
              <button onClick={()=>{myedit(key._id)}}>Edit</button>
            </a>
          </td>

         
        </tr>
      </>
    )
  })
    return(
        <>
          <h1>This is update page</h1>
          <Table>
      <thead>
        <tr>
          <th>Empno</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}

export default Update;