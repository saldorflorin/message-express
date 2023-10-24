import { Paper, Typography } from "@mui/material";

interface Props{
    Nome: string,
    Value: string,
}

const Cards = (props: Props) =>{
    return(
        <Paper elevation={0} sx={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
            <Typography sx={{ mb: 1, fontWeight: 'medium',fontSize: 17, color: 'gray'}}>{props.Nome}</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 45}}>{props.Value}</Typography>
        </Paper>
    )
}

export default Cards