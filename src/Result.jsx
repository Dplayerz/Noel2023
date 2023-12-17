import { addDoc, collection, getDocs } from "firebase/firestore";
import { txtDB } from "./Firebase";
import { useEffect, useState } from "react";
import "./result.css"

function Result(){

const [data, setData] = useState([])

    const getData = async () =>{
        const valRef = collection(txtDB, "txtData")
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
        console.log(dataDb)
    }

    useEffect(()=> {
        getData()
    }, [])
console.log(data)

    return <div>

   {
    data.map(value=><div>
     <div className="nomr">
        <h1 className="couleurn">{value.txtVal}</h1>
        </div>


      <div className="imgr">
        <img  src={value.imgUrl} height="200px" width="200px"/>
        </div>
        </div>)
   }

    </div>
}

export default Result;
