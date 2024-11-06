import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Edit=()=>{

    const {empid} = useParams();
    const [mydata,setmydata]=useState({});

    const loaddata=()=>{
        let api="http://localhost:8000/students/studentEdit";
        axios.post(api,{id:empid}).then((res)=>{
          console.log(res.data)
          setmydata(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    },[])

    const handleinput=(e)=>{
      let name = e.target.name;
      let value= e.target.value;
      setmydata(values=>({...values,[name]:value}))

    }

    const handlesubmit=()=>{
      let api="http://localhost:8000/students/studentEditSave";
      axios.post(api,mydata).then((res)=>{
         alert("data sucessfully updated")
      })
    }

    return(
        <>
           <h1>This is edit page</h1>
           <input type="text" name="empno"  value={mydata.empno}  onChange={handleinput}/><br/><br/>
           <input type="text" name="empname"  value={mydata.empname}  onChange={handleinput}/><br/><br/>
           <input type="text" name="designation"  value={mydata.designation}  onChange={handleinput}/><br/><br/>
           <input type="text" name="salary"  value={mydata.salary}  onChange={handleinput}/><br/><br/>
           <button  onClick={handlesubmit}>save</button>
        </>
    )
}

export default Edit;