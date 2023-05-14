import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'

function EditStudents({students, setStudents}) {
    const {id} = useParams();
    const navigate = useNavigate()
    const [idx, setIdx] = useState("")
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [education, setEducation] = useState("")

    useEffect(()=>{
      const studendData = students.find(stud => stud.id === id);
      if(studendData) {
      setIdx(studendData.id)
      setName(studendData.name)
      setBatch(studendData.batch)
      setGender(studendData.gender)
      setEducation(studendData.education)
      }
    }, [id, students])

    const updateStudent = ()=>{
        //update the studenet
      const studIndex = students.findIndex((stud)=>stud.id === id);
      //console.log(studIndex)

      const updatedStudent = {
        id,
        name,
        batch,
        gender,
        education
      }
    //    console.log(updatedStudent)
      students[studIndex] = updatedStudent
      setStudents([...students])
      navigate("/students")
    }

  return (
    <Base
    title={"Edit Student"}
    description={"Fill the form to edit student info"}
    >
    <div className='form-group'>
    <h3>Update Student</h3>

    <input
    placeholder='Enter Id of student'
    type ="number"
    value={idx}
    onChange={(e)=>setIdx(e.target.value)}
    />
    <input
     placeholder='Enter Name of student'
     type="text"
     value={name}
     onChange={(e)=>setName(e.target.value)}
     />
     
    <input
     placeholder='Enter Batch of student'
     type="text"
     value={batch}
     onChange={(e)=>setBatch(e.target.value)}
     />

    <input
     placeholder='Enter Gender of student'
     type="text"
     value={gender}
     onChange={(e)=>setGender(e.target.value)}
     />

    <input
     placeholder='Enter Eductaion of student'
     type="text"
     value={education}
     onChange={(e)=>setEducation(e.target.value)}
     />
   <div>
    <button
    onClick={updateStudent}
    >Update Student</button>
    </div>
</div>
</Base>
  )
}

export default EditStudents