import {Drawer, Box, Toolbar, List, Container,} from "@mui/material";
import ListMenu from "./ListMenu";
import {Home, Sms, Person, FolderCopy, FiberManualRecord, Settings, AssignmentInd} from "@mui/icons-material";
import CssBaseline from '@mui/material/CssBaseline';

export default function LeftMenu(){
    return(
        <>
            <CssBaseline />
            <Drawer variant='permanent' sx={{
            width: 300,
            [`& .MuiDrawer-paper`]: { width: 300, boxSizing: 'border-box' },
            }}>
                <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            <ListMenu Text="Inicio" Icon={<Home />} SubMenu={[]} />
                            <ListMenu Text="Especialidades" Icon={<AssignmentInd />} SubMenu={[]} />
                            <ListMenu Text="Clientes" Icon={<Person />} SubMenu={subMenuClientes}/>
                            <ListMenu Text="Mensagens" Icon={<Sms />} SubMenu={subMenuMensagens} />
                            <ListMenu Text="Ger. de Arquivos" Icon={<FolderCopy />} SubMenu={[]}/>
                            <ListMenu Text="Configurações" Icon={<Settings />} SubMenu={[]}/>
                        </List>
                    </Box>
            </Drawer>             
        </>
    )
}


const subMenuMensagens = [
    { nome: "Lista de Mensagens", icon: <FiberManualRecord sx={{ fontSize: 10}}/>},
    { nome: "Grupo de Mensagens", icon: <FiberManualRecord sx={{ fontSize: 10}}/>},
    { nome: "Criar Grupo de Mensagens", icon: <FiberManualRecord sx={{ fontSize: 10}}/>},
    { nome: "Criar Mensagem", icon: <FiberManualRecord sx={{ fontSize: 10}}/>},
]

const subMenuClientes = [
    { nome: "Lista de Clientes", icon: <FiberManualRecord sx={{ fontSize: 10}}/>},
    { nome: "Cadastrar", icon: <FiberManualRecord sx={{ fontSize: 10}}/>},
]