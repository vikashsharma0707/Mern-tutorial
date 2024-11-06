import axios from "axios";
import { useState } from "react";



const Search=()=>{

    const [empno,seteno] =useState("");
    const [val,setval] =useState([]);

    const handlesearch=()=>{
        let api="http://localhost:8000/students/studentSearch";
        axios.post(api,{empno:empno}).then((res)=>{
          setval(res.data)
    
        })
    }

    let ans = val.map((key)=>{
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
           <h1>This is search page</h1>
           <input type="text" value={empno}  onChange={(e)=>{seteno(e.target.value)}}/>
           <button  onClick={handlesearch}>search</button>

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

export default Search;