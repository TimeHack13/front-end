import TextField from '@material-ui/core/TextField';
import { useState } from "react"
import './style.css'

export default function LoginSite(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    return(
        <div className="loginComponent">
            <h2>Login</h2>
            <form action="">
                <input
                    required 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                />               
                <input
                    required 
                    type="password" 
                    id="senha" 
                    placeholder="Senha" 
                    value={senha}
                    onChange={(e)=>setSenha(e.target.value)} 
                />
                <button>Entrar</button>
            </form>
            <p>Ou</p>
            <div className="btn-redes">
                <button>Entrar com Facebook</button>
                <button>Entrar com Google</button>
            </div>
            
            

        </div>
    )
}