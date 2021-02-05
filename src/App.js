import React, {useState} from "react";
import './App.css';

function App() {
  const [value, setValue]=useState("");
  const [imgData, setImgData]=useState([]);

  
  const fetchImg=()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=YV024mO0UgSUAZdOAloXOygnslrl2I1xVjOA9Qeiacg&query=${value}&orientation=squarish&per_page=50`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setImgData(data.results)})
    .catch(err=> {
      console.log("there is an err", err) 
    })
      
  };
  return (
    <div className="App">
     <div className="container">
       <input 
       style={{width:"60%", padding:"15px"}}
       type="text" 
       value={value} 
       onChange={(e)=>setValue(e.target.value)}  
       placeholder="Type your Requried Img"/>
       <button onClick={()=>fetchImg()}>Search</button>
     </div>

     <div className="img_div">
       {
         imgData && imgData.map((item)=>{
           return <img key={item.id} src={item.urls.regular}/>
         })
       }
     </div>
    </div>
  );
}

export default App;
