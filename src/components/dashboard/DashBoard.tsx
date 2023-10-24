import { Box, Typography, Grid} from '@mui/material';
import { GridActionsCellItem, GridColDef} from '@mui/x-data-grid';
import DataGridUltimasMensagens from './Datagrid';
import Cards from './Cards';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import StatusCard from './StatusCard';

interface Props{

}



function DashBoard(props: Props) {
  
  return (
    <>   
      <Grid item xs={12} display={'flex'} justifyContent={'flex-start'} sx={{py: 3, pl: 1}}>
        <Typography variant='h5' sx={{ fontWeight: 600 }}>Dashboard</Typography>
      </Grid>

      <Grid item xs={12} sx={{mb: 2, borderRadius: 2, background: 'white', boxShadow: 1}}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', '& > :not(style)': { m: 2,  width: 210, height: 128, },  }}>
          <Cards Nome='Clientes' Value='2.690'/>
          <Cards Nome='Mensagens' Value='136.989'/>
          <Cards Nome='Mensagens em Fila' Value='15'/>
          <Cards Nome='Confirmados' Value='65.898'/>
        </Box>
      </Grid>
      

      {/* CENTRAL CARD */}
      <Grid item xs={12} sx={{mb: 2,  display: 'flex', flexWrap: 'wrap'}}>
        <StatusCard />
      </Grid>
      

      {/* DATAGRID */}
      <Grid item xs={12} display={'flex'} justifyContent={'center'} flexDirection={'column'} sx={{ p: 2, mb: 2, borderRadius: 2, background: 'white', boxShadow: 1}}>
        < DataGridUltimasMensagens  Columns={columns} Rows={rows}/>
      </Grid>
    </>   
  )
}

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID',
    width: 50, 
  },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 250,
    editable: false,
  },
  {
    field: 'especialidade',
    headerName: 'Especialidade',
    width: 200,
    editable: false,
  },
  {
    field: 'data_agendamento',
    headerName: 'Data Agendamento',
    type: 'valueGetter',
    width: 200,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status Envio',
    width: 180,
    editable: false,
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Ações',
    width: 180,
    cellClassName: 'actions',
    getActions: ({ id }) => {
      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={() => {console.log('Cliquei em Editar')}}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<SaveIcon />}
          label="Save"
          onClick={() => {console.log('Cliquei em Salvar')}}
          color="inherit"
        />,
      ];
    },
  },
];

const rows = [
  { id: 1, nome: 'Salvador Florindo Gozza', especialidade: 'Cardiologia', data_agendamento: '18/02/1990 18:10', status: 'Enviado Whatsapp' },
  { id: 2, nome: 'Jamie Lannister', especialidade: 'Cirurgia Vascular', data_agendamento: '18/02/1990 18:00', status: 'Enviado Whatsapp' },
  { id: 3, nome: 'Cersei Lannister', especialidade: 'Cirurgia Vascular', data_agendamento: '18/02/1990 16:20', status: 'Enviado Whatsapp'  },
  { id: 4, nome: 'Tony Stark', especialidade: 'Cardiologia', data_agendamento: '18/02/1990 18:40', status: 'Enviado Whatsapp'  },
  { id: 5, nome: 'Daenerys Targaryen', especialidade: 'Dermatologia', data_agendamento: '18/02/1990 18:00', status: 'Enviado Whatsapp'  },
  { id: 6, nome: 'Bart Simpson da Silva', especialidade: 'Cardiologia', data_agendamento: '18/02/1990 18:00', status: 'Enviado Whatsapp'  },
  { id: 7, nome: 'William Tatcher', especialidade: 'Dermatologia', data_agendamento: '18/02/1990 17:00', status: 'Enviado Whatsapp'  },
  { id: 8, nome: 'Jean Claude Van Dame', especialidade: 'Cardiologia', data_agendamento: '18/02/1990 19:00', status: 'Enviado Whatsapp'  },
  { id: 9, nome: 'Chucky Norris', especialidade: 'Cirurgia Vascular', data_agendamento: '18/02/1990 18:30', status: 'Enviado Whatsapp'  },
];

export default DashBoard