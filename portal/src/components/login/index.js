
import { useState } from "react"
import './style.css'

export default function LoginSite(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    async function handleConfirmation(event){
        event.preventDefault()
        const dados ={
            email,
            senha
        }
        const response = await fetch("https://hypeplaceapp.herokuapp.com/usuario/logar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      }).then(res => res.json() );
      console.log(response.status)

      window.localStorage.setItem("logado",response.status)
    //   window.localStorage.removeItem("logado") ----- codigo para no futuro quando sair da conta
      setEmail("")
      setSenha("")

    }
    
    return(
        <div className="loginComponent">
            <h2>Login</h2>
            <form onSubmit={handleConfirmation}>
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
                <button type="submit" className="btn">Entrar</button>
            </form>

            <p>Ou</p>
            <div className="btn-redes">
                <button className="btn">Entrar com Facebook</button>
                <button className="btn">Entrar com Google</button>
            </div>
            
            

        </div>
    )
}