import React, { useState } from 'react'

const Crud = () => {
    const [name,setName]=useState('')
    const [rno,setRno]=useState('')

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }
    const handlRnoChange = (e)=>{
        setRno(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setStudents([...students,(name,rno)])
        setName('')
        setRno('')
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlfor="">Name:</label>
                <input type="text" value={name} onChange={handleNameChange}/>
            </div><br/>
            <div>
                <label htmlfor="">Rno:</label>
                <input type="text" value={rno}/>
            </div>
            <button>Submit</button>
        </form>
        {students.map((student)=>(
            <div>
                <h1>Name:{student.name}</h1>
                <h1>Rno:{student.rno}</h1>
                </div>
    ))}
    </div>
)
}


export default Crud