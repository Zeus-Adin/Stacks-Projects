import './assets/Home.css';
import logo from './assets/logo.svg';

import { authenticate, userSession } from './auth';

export default function Home(){   
    return(
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>1st Blockchain Calculator</h2>
            <p>This is only for learning purposes, as it isnt practical</p>
            <button onClick={() => authenticate()}> Authenticate </button>
        </div>
    )
}