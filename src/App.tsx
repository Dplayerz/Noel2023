import NavBar from "./navbar"
import imagePath from "./assets/noel.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./Upload";
import Func from "./UploadVrai"
import Result from "./Result"
import Up from "./UploadPage"




function App() {
  
  
  let items = ["Home", "Upload", "Classement",];
  return (
    <BrowserRouter>
    
      <NavBar 
      brandName="Pepper Noel" 
      imageSrcPath={imagePath} 
      navItems={items}/>
    
    <Routes>
    <Route path="/" element={<Upload/>}></Route>
      <Route path="/Upload" element={<Upload/>}></Route>
      <Route path="/UploadVrai" element={<Func/>}></Route>
      <Route path="/Result" element={<Result/>}></Route>
      <Route path="/UploadPage" element={<Up/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;