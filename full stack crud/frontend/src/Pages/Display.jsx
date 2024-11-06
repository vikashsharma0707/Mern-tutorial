import { useEffect, useState } from "react"
import axios from "axios";
import Table from 'react-bootstrap/Table';




const Display=()=>{
  const [val,setval] =useState([]);

  const loaddata=()=>{
    let api="http://localhost:8000/students/studentDisplay"
    axios.get(api).then((res)=>{
       setval(res.data);
    })
    
  }

 

  useEffect(()=>{
    loaddata();
  },[])


  const ans = val.map((key)=>{
     return(
      <>
        <tr>
          <td>{key.empno}</td>
          <td>{key.empname}</td>
          <td>{key.designation}</td>
          <td>{key.salary}</td>
        </tr>
      </>
     )
  })
    return(
        <>
          <h1>This is display page</h1>
          <Table>
      <thead>
        <tr>
          <th>Eno</th>
          <th>Name</th>
          <th>Degisnation</th>
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

export default Display