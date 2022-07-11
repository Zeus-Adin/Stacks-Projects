import logo from './assets/logo.svg'
import { userSession, logout} from './auth';

export default function Calc(){    
    return(

        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>1st Blockchain Calculator</h2>
            <p>Lets Calculate Via the BlockChain</p>
            <div>
                <label>First Number: </label>
                <input id="first_num" placeholder="First number" />
            </div>
            <br/>
            <div>
                <label>Operator: </label>
                <select>
                    <option value="+">Plus</option>
                    <option value="-">Subtract</option>
                    <option value="/">Division</option>
                    <option value="*">Multiply</option>
                </select>
            </div>
            <br/>
            <div>
                <label>First Number: </label>
                <input id="second_num" placeholder="Second number" />
            </div>
            <br/><br/>
            <button> Process Calculation </button>
            <br/><br/>
            <button onClick={()=> window.location.replace('/formular')}> Deploy a Math Formular </button>
            <br/><br/>
            <button onClick={()=>logout()}> logout </button>
        </div>
    )
}