import { useState } from "react";
import {imgDB, txtDB} from "./Firebase";
import {v4} from "uuid";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import "./Upload.css"

function Up(){
    const [txt, setTxt] = useState(" ");
    const [img, setImg] = useState(" ");

    const handleUpload = (e) =>{
        const imgs = ref(imgDB, `imgs/${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data=>{
            console.log(data, "imgs")
            getDownloadURL(data.ref).then(val=>{
                setImg(val)
            })
        })
    }

const handleClick = async ()=>{
    const valRef =  collection(txtDB, "txtData")
    await addDoc(valRef,{txtVal:txt,imgUrl:img})
    alert("Envoyée!")
 }

    return <div>

<div className="inputTXT">
    <p>Écrire votre nom ici</p>
<input onChange={(e) =>setTxt(e.target.value)}/><br/>
</div>

<div className="PhotoC">
<label for="images" class="drop-container" id="dropcontainer">
<input type="file" onChange={(e)=>handleUpload(e)}/><br/>
</label>
</div>

<div className="BoutonDiv">
    <p>Ne pas oublier d'envoyer</p>
<button className="Bouton" onClick={handleClick}>Envoyer</button>
</div>
    </div>
}

export default Up;