import './assets/Home.css'
import { Deployfunctions, userSession } from "./auth";

let address = "Address will apear here";

export default function Deployform(){
    function Displayadress(){
        address = userSession.loadUserData().profile.stxAddress.testnet;
        console.log(address);
        return address
    }
    return(
        <div className="App">
            <br/>
            <input id="formularname" placeholder="Name of formular function"/><br/>
            <textarea rows="5" cols="60" id="formulars" placeholder="Enter formula to deploy, please script in .clar"></textarea>
            <br/>
            <p>{Displayadress()}</p>
            <br/>
            <button onClick={()=> window.location.replace('/calc')}>Go Back</button>
            <br/>
            <button onClick={()=>Deployfunctions(document.getElementById("formularname").value, document.getElementById("formulars").value)}>Deploy Formular</button>
        </div>
    )
}
