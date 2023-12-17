import "./tableau.css";
import Matt from "./assets/matt.jpg";
import Maman from "./assets/Maman.jpg";
import Mel from "./assets/Méli.jpg";
import Bern from "./assets/Bern.jpg";
import frank from "./assets/Frank.jpg";
import Mami from "./assets/Mami.jpg";
import Zac from "./assets/Zac.jpg"
import Aly from "./assets/Aly.jpg"
import Elo from "./assets/Elo.jpg"
import Pat from "./assets/Pat.jpg"
import Nat from "./assets/Nat.jpg"
import Chris from "./assets/Chris.jpg"
import Buster from "./assets/Buster.jpg"


function MattH(){
return <img className="image" src={Matt}></img>
}

function MamanH(){
  return <img className="image" src={Maman}></img>
  }

  function MelH(){
    return <img className="image" src={Mel}></img>
    }

    function MamiH(){
      return <img className="image" src={Mami}></img>
      }
      function FrankH(){
        return <img className="image" src={frank}></img>
        }
        function BernH(){
          return <img className="image" src={Bern}></img>
          }
          function PatH(){
            return <img className="image" src={Pat}></img>
            }
            function AlyH(){
              return <img className="image" src={Aly}></img>
              }
              function EloH(){
                return <img className="image" src={Elo}></img>
                }
                function ZacH(){
                  return <img className="image" src={Zac}></img>
                  }
                  function BusterH(){
                    return <img className="image" src={Buster}></img>
                    }
                    function ChrisH(){
                      return <img className="image" src={Chris}></img>
                      }
                      function NatH(){
                        return <img className="image" src={Nat}></img>
                        }
                  
      
    
  


function Func() {
    const equipe1 = [
        { Nom: "Matt", Photo: <MattH/>},
        { Nom: "Méli", Photo: <MelH/>},
        { Nom: "Bern", Photo: <BernH/>},
        { Nom: "Frank", Photo: <FrankH/>},
        { Nom: "Zac", Photo: <ZacH/>},
        { Nom: "Élo", Photo: <EloH/>},
        
      ];

      const equipe2 = [
        { Nom: "Nat", Photo: <MamanH/>},
        { Nom: "Mami", Photo: <MamiH/>},
        { Nom: "Pat", Photo: <PatH/>},
        { Nom: "Chris", Photo: <ChrisH/>},
        { Nom: "Nat", Photo: <NatH/>},
        { Nom: "Aly", Photo: <AlyH/>},
        { Nom: "Buster", Photo: <BusterH/>}
        
      ];


      

    return  <div className="App">
    <header>Équipe 1</header>
  
      <table>
        <tr>
          <th>Nom</th>
          <th>Photo</th>
        </tr>
        {equipe1.map((val, key) => {
          return (
            <tr key={key} className="imageCoul">
              <td>{val.Nom}</td>
              <td>{val.Photo}</td>
            </tr>
          );
        })}
      </table>

      <header>Équipe 2</header>
  
      <table>
        <tr>
          <th>Nom</th>
          <th>Photo</th>
        </tr>
        {equipe2.map((val, key) => {
          return (
            <tr key={key} className="imageCoul">
              <td>{val.Nom}</td>
              <td>{val.Photo}</td>
            </tr>
          );
        })}
      </table>
      </div>
}

export default Func;