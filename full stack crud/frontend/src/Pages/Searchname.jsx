import axios from "axios";
import { useState } from "react";



const Searchname=()=>{
    const [empname,setempname]=useState("");
    const [val,setval]=useState([]);

    const handleinput=(e)=>{
        setempname(e.target.value);
        let api=`http://localhost:8000/students/studentSearchname/?empname=${empname}`
        axios.get(api).then((res)=>{
            console.log(res.data)
           setval(res.data)
        })
    }

    const ans =val.map((key)=>{
        return(
            <>
              <tr>
                <tr>{key.empno}</tr>
                <tr>{key.empname}</tr>
                <tr>{key.designation}</tr>
                <tr>{key.salary}</tr>
              </tr>
            </>
        )
    })


    return(
        <>
           <h1>This is seach page</h1>
           <input type="text" value={empname} onChange={handleinput}/>
           <table>
            <tr>
                <th>Empno</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
            {ans}
           </table>

        </>
    )
}

export default Searchname;