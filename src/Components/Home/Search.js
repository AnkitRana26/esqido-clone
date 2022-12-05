import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Search.css';


function Search(props){

    let nav = useNavigate();
    let [state, setState] = React.useState([]);
    let [cnt, setCnt] = React.useState(0);
    let ref = useRef();

    function debounceEg(cb, delay) {
        let timerid;
        return function () {
          if (timerid) clearTimeout(timerid);
          timerid = setTimeout(() => {
            cb();
          }, delay);
        };
    }


    if(!props.bool ){
        setState([]);
    }

      async function getdata() {
        const item = document.getElementById("myInput").value;
        const url = `https://esqido-data.onrender.com/products?q=${item}&_page=1&_limit=5`;
        let data = await getdataApi(url);
        console.log(data);
            setState((state)=data);
      }
       
      async function getdataApi(url) {
        try {
          const resp = await fetch(url);
          const data = await resp.json();
          return data;
        } catch(error){
              return error;
        }
      }

    //   ref.current.addEventListener("blur", ()=>{
    //     props.fun(false);
    //   });

     return (
        <div id="search">
            <input ref={ref} onBlur={()=>{props.fun(false)}} style={{outline:"none"}} onChange={debounceEg(getdata, 0)} id="myInput" placeholder="What are you looking for?"/>
            {state.map((ele, idx)=>(
                // setCnt((cnt)=>cnt+1);
                    <div className="item" onClick={()=>{nav(`/productdecription/${ele.id}`)}}>
                    <img src={ele.img1} alt={"j"} />
                    <p>{ele.title}</p>
                </div>
        
                // <Show {...ele}/>
            ))}
        </div>
    )
    
}

export default Search;