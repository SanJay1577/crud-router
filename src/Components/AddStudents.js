import React, { useState } from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'
import { Button, TextField} from '@mui/material'

function AddStudents({students, setStudents}) {
    //defining the states 
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [education, setEducation] = useState("")
    const navigate = useNavigate()

    const handleAddStudent = ()=>{
      const newStudent = {
        id,
        name,
        batch,
        gender,
        education
      }
     // console.log(newStudent)
       setStudents([...students, newStudent])
      navigate("/students")
    }
  return (
    <Base
    title={"Add New Students"}
    description={"Fill the form to add new students"}
    >
    <div className='form-group'>
        <h3>Add Student</h3>
        
        <TextField  label="Id" variant="outlined" fullWidth sx={{ m: 1 }} 
        placeholder='Enter Id of student'
        type ="number"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        />
        <TextField  label="Name" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Name of student'
         type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />
         
        <TextField  label="Batch" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Batch of student'
         type="text"
         value={batch}
         onChange={(e)=>setBatch(e.target.value)}
         />

        <TextField  label="Gender" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Gender of student'
         type="text"
         value={gender}
         onChange={(e)=>setGender(e.target.value)}
         />

        <TextField  label="Education" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Eductaion of student'
         type="text"
         value={education}
         onChange={(e)=>setEducation(e.target.value)}
         />
       <div>
        <Button
        onClick={handleAddStudent}
        variant="contained"
        >Add Students</Button>
        </div>
    </div>
    </Base>
  )
}

export default AddStudents