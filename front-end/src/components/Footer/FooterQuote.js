import React, { useState, useEffect  } from "react";

export default function FetchQuote() {
    const [quote,setQuote] = useState("");
    const [loading,setLoading] = useState(true);
    const [name,setName]= useState("");

    useEffect(() => {
        getQuote();
       const intervalID = setInterval(()=> {
        getQuote()
       }, 60 * 1000);
    return ()=>{
        clearInterval(intervalID);
    }
    },[])

   function getQuote() { 
        fetch("http://localhost:5000/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setQuote(data.quote);
            setName(data.name);
      })
   }
            
    return (
        <div>
            <p>{`${data.quote}- ${data.name}`}</p>
        </div>
    )
}
