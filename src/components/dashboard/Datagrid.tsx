import { Box, Grid, Typography} from "@mui/material";
import { DataGrid, } from '@mui/x-data-grid';

interface Props{
    Rows: any[],
    Columns: any[]
}


function DataGridUltimasMensagens(props: Props) {
  return (
    <>
        <Grid item xs={12} sx={{py: 3, pl: 1}}>
            <Typography variant='h5' display={'flex'} justifyContent={'flex-start'} sx={{ fontWeight: 600, fontSize: 18 }}>Últimas Mensagens</Typography>
        </Grid>
        <Box sx={{ height: '600', }}>
            <DataGrid
                rows={props.Rows}
                columns={props.Columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    </>
  )
}

export default DataGridUltimasMensagens