import React, { useState } from "react";

function StudentRegistration(){
    const [Form,setForm]=useState({
        Name:"",
        Email:"",
        Age:"",
        Course:"",
    });
    
    const [student,setStudent]=useState(null);
    const handleChange=(e)=>{
        setForm({
            [e.target.Name]:e.target.value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setStudent(form);
    };

    const clearForm=()=>{
        setForm({
            Name:"",
            Email:"",
            Age:"",
            Course:"",
        });

        setStudent(null);
    };

    return(
        <div>
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
                <input name="Name" placeholder="StudentName" value={form.name} onChange={handleChange}/>
                <br/><br/>

                <input name="Email" placeholder="Email" value={form.Email} onChange={handleChange}/>
                <br/><br/>

                <input name="Age" placeholder="Age" value={form.Age} onChange={handleChange}/>
                <br/><br/>

                <input name="Course" placeholder="Course" value={form.Course} onChange={handleChange}/>
                <br/><br/>

                <button type="Submit">Submit</button>

                <button type="button" onClick={clearForm}>Clear
                </button>
                </form>

                {student &&(
                    <div>
                        <h3>Student Information</h3>
                        <p>Name:{student.Name}</p>
                        <p>Email:{student.Email}</p>
                        <p>Age:{student.Age}</p>
                        <p>Course:{student.Course}</p>
                    </div>
                )}
        </div>
    );
}

export default StudentRegistration;