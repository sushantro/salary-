import React from "react";
import { useState } from "react";



const John=()=>{


    const[topa,settopa]=useState();
    const[kopa,setkopa]=useState()
    const[fota,setfota]=useState()


    const johna=(e)=>{
        settopa(e.target.value)

    }
    const johnaa=(e)=>{
        setkopa(e.target.value)


    }
    const lopa=()=>{
        setfota(kopa/12)
    }
    return(

<>
<input type="text" onChange={johnaa}  />
<input type="date" onChange={johna} />
<button onClick={lopa}>calculate</button>
<li>{fota}</li>


</>


    )
}

export default John;