import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import{ useState} from 'react'
import './style.css'

export default function Avaliar(){
    const [value, setValue] = useState(2);

    return(
        <form action="" className="form">
            <label htmlFor="razaosocial">Nome do estabelecimento</label>
            <input type="text" id="razaosocial" name="razaosocial" />

            <label htmlFor="local">Localização</label>
            <input type="text" id="local" name="local" />

            <Box component="fieldset" mb={3} borderColor="transparent" className="star">
                <Typography component="legend">Qual nota você daria para o local?</Typography>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
            </Box>
            <div className="textarea">
                <label htmlFor="descricao">Conte-nos sobre sua experiência no local*</label>
                <textarea name="descricao" id="descricao" cols="30" rows="10"></textarea>
            </div>
            <div className="checkbox">
                <input type="checkbox" value="anonimo" id="anonimo"/>
                <label htmlFor="anonimo">Publicar de forma anônima</label>
            </div>
            
            <div className="button">
                <button type="submit">Avaliar</button>
            </div>    
        </form>
        
    )
}