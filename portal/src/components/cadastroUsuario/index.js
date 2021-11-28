import { useState } from "react"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    img:{
        width:'50px'
    },
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'10px'
    }
  }));

function CadastroUsuario(){
    const [dadosForm, setDadosForm] = useState({});
    const [nome, setNome] = useState("")
    const [nomeSocial, setNomeSocial] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [avatar, setAvatar] = useState("")
    const classes = useStyles();

    function handleSubmit(e){
        e.preventDefault()
        setDadosForm([{
            nome,
            nomeSocial,
            email,
            senha,
            avatar
        }])
    }

    return(
        <form onSubmit={handleSubmit} className={classes.root}>
            <TextField
                required
                
                label="Nome"
                placeholder="Insira seu Nome"
                variant="outlined"
                value={nome}
                onChange={(e)=>setNome(e.target.value)} 
            />
            <TextField
                required
                
                label="Nome Social"
                placeholder="Insira seu Nome Social"
                variant="outlined"
                value={nomeSocial}
                onChange={(e)=>setNomeSocial(e.target.value)}
            />
            <TextField
                required
                label="Email"
                type="email"
                placeholder="Insira seu Email"
                variant="outlined"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Senha"
              type="password"
              value={senha}
              onChange={(e)=>setSenha(e.target.value)}
            />
            <Button variant="contained" type="submit"color="primary"
                size="large">Enviar</Button> 
        </form>
    )
}
export default CadastroUsuario