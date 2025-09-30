let[counter,setCounter]=useState(0);
  let stock = 10;
  return (
    <div  class="wrapper">
     
      <button class ="plus"   onClick = {() =>{
        if(counter<stock){
          setCounter(counter+1)
        }
      }}>Increament</button>
       <p clas="counter">{counter}</p>
     
      <button class = "minus"  onClick = {() =>{
        if(counter>0){
          setCounter(counter-1);
        }
      }}> Decrement</button>
    </div>
  );
}

export default App;
