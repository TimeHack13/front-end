import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles((theme) => ({
    button:{
        border:'1px solid #fff',
        
        'label + &': {
            color:'#fff',
          },
    }
  }));
export default function CadastroUsuario(){
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
    const classes = useStyles();
    
    return(
        <div className="cadUsuario">
            <h2>Cadastra-se</h2>
            <form action="">
                <input
                    required 
                    type="text" 
                    id="name" 
                    placeholder="Nome" 
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)} 
                />
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
                <button>Cadastrar-se</button>
            </form>   

        </div>
    )
}