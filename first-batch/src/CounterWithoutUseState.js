import React from 'react';
let count = 0;
function CounterWithoutUseState() {
      const handleClick = () => {
        count++;
        document.getElementById('display').innerTEXT=`count ${count}`;

      };
      return(
        <div style = {{ textAlign : ' cente' ,marginTop : '50px'}}>
        <h2>Counter without usestate or hook</h2>
        <p id='display'>Count:0</p>
        <button onclick={handleClick} stype={{padding: '10px', font: "16px"}}>
          Increment</button>
        </div>
      );
    }
      

export default CounterWithoutUseState;