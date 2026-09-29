import React, { useState } from 'react'

// const Form = () => {
//     const [name,setName]=useState('')

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log(name);
        
//     }
    
//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit}>
//             <label htmlFor="">Name:</label>
//             <input type="text" value ={name}>
//             onChange={(e)} => setName(e.target.value)}/> < br />
//             <button>Sumbit</button>
//         </form>
//     </div>
//   )
// }

// export default Form




import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;