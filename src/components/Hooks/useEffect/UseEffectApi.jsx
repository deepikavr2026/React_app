import React, { useEffect } from 'react'

const UseEffectApi = () => {

    const [state,setState] = useState([])
    console.log(state,"statee............");
    
        const response = async()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
            console.log(response);
            const data = await response.json();
            console.log(data);
        }   catch (err) {
            console.log(err);
            
        }
    };
    useEffect(()=>{
        fetchUsers();
    },[])

  return <div>
    {state.map(user=>{
        return(
            <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
            </ul>
        )
    })}
  </div>;

};

export default UseEffectApi