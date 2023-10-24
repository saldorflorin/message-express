import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { WhatsApp } from '@mui/icons-material';

interface Props {
}

function StatusCard (props: Props) {
  return (
    <>
        <Grid item xs={3} sx={{mr: 2, borderRadius: 2, background: 'white', boxShadow: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', flexWrap: 'wrap'}}>
            <Box sx={{}}>
                <Box display={'flex'} flexDirection={'row'}>
                    <WhatsApp fontSize='medium' sx={{ mr: 2}}/>
                    <Typography variant='h6'>WhatsApp</Typography>
                </Box>

                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                    <Box display={'flex'}>
                        <Typography sx={{mr: 1}}>Status:</Typography>
                        <Typography color={'green'} fontWeight={600}>Conectado</Typography>
                    </Box>
                    <Box display={'flex'}>
                        <Typography sx={{mr: 1}}>Número:</Typography>
                        <Typography fontWeight={600}>(13) 99999 - 9999</Typography>
                    </Box>
                </Box>      
            </Box>

        </Grid>
        <Grid item xs={8.8} sx={{ borderRadius: 2, background: 'white', boxShadow: 1, display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Box>
                <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={700}
                height={300}
                />
            </Box>
        </Grid>
    </>
  );
}

export default StatusCard
