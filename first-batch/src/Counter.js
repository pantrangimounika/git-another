import React from "react";
function Counter(){
    let count=0;
      function increaseCounter(){
         count++;
         document.getElementById("countervalue").innerText=count;

      }
      return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h2> counter without hooks</h2>
            <p id="countervalue">{count}</p>
            <button onClick={increaseCounter}>increase Counter</button>
        </div>
      );
}
    export default Counter;