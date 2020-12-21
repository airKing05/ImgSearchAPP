import React, {useState} from "react";
import './App.css';

function App() {
  const [value, setValue]=useState("");
  const [results, setResults]=useState([]);
  const fetchImg=()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=YV024mO0UgSUAZdOAloXOygnslrl2I1xVjOA9Qeiacg&query=${value}&orientation=squarish&per_page=40`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setResults(data.results)})
      
  };
  return (
    <div className="App">
     <div className="main_div">
       <input 
       style={{width:"60%", padding:"10px"}}
       type="text" 
       value={value} 
       onChange={(e)=>setValue(e.target.value)}  
       placeholder="Type your Requried Img"/>
       <button onClick={()=>fetchImg()}>Search</button>
     </div>
     <div className="img_div">
       {
         results.map((item)=>{
           return <img key={item.id} src={item.urls.regular}/>
         })
       }
     </div>
    </div>
  );
}

export default App;
