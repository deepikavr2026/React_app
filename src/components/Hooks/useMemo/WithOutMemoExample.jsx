import React, { useState } from 'react'

const WithOutMemoExample = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] =useState(1);

    const expensiveCalculation = ()=>{
        console.log("Calculation running");

        let result = 0;

        for (let i = 0; i < 10000000; i++){
            result += number;
        }

        return result;
        
    };

  return (
    <div>
        <h2>Without useMemo</h2>

        <h3>Count:{count}</h3>

        <button onClick={()=>setCount(count + 1)}>
            Increase Count 
        </button>

        <p>Result: {expensiveCalculation()}</p>
    </div>
  );
};

export default WithOutMemoExample