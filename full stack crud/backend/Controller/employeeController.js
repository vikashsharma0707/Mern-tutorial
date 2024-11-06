const stuModel = require("../Models/employeeModel");

const stuDataSave= async(req,res)=>{
    const {eno,name,designation,salary} = req.body

    try{
        const Student = await stuModel.create({
            empno:eno,
            empname:name,
            designation:designation,
            salary:salary
        })
        res.status(200).json(Student)
    } catch(error){
        res.status(404).json("data not save")
    }
}


const stuDataDisplay = async(req,res)=>{
    try{
        const stuData = await stuModel.find();
        res.status(200).json(stuData)
    } catch(err){
        res.status(404).json("Data not found")
    }
}

const stuDataSearch = async(req,res)=>{
    const {empno} =req.body;
    const myData = await stuModel.find({empno:empno});
    res.send(myData);
  }

  const stuUpdateDisplay = async(req,res)=>{
    try{
        const stuDisplay= await stuModel.find()
            res.status(200).json(stuDisplay)
        
    } catch(err){
        res.status(404).json("data not display")
    }
  }

  const stuDataDelete =async(req,res)=>{
    const myid =req.body.id;
    const studelete = await stuModel.findByIdAndDelete(myid);
    res.send("record deleted")
  }


  const stuEdit =async(req,res)=>{
    const id =req.body.id;
    const stuedit =await stuModel.findById(id);
    res.send(stuedit)
  }

  const stuEditSave = async(req,res)=>{
     const {_id,empno,empname,designation,salary} =req.body;
     const  stueditsave =await stuModel.findByIdAndUpdate(_id,{
        empno:empno,
        empname:empname,
        designation:designation,
        salary:salary
     })

     res.send("data sucessfully updated")
  }

  const stuSearchname = async(req,res)=>{
    let empnm = req.query.empname;
    console.log(req.query)

    const stuseacrhname = await stuModel.find({empname:{$regex:empnm}})
    console.log(stuseacrhname);
    res.send(stuseacrhname)

  }
  
  

module.exports={
    stuDataSave,
    stuDataDisplay,
    stuDataSearch,
    stuDataDisplay,
    stuDataDelete,
    stuEdit,
    stuEditSave,
    stuSearchname
    
}


