import { Grid, Toolbar, Container, useTheme} from '@mui/material';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import DashBoard from "../components/dashboard/DashBoard";

function Panel() {
  const theme = useTheme();
  return (
    <>
      <Grid container>
          <Header />
      </Grid>
      <Grid container border={1}>
        <LeftMenu /> 
        <Grid item sm={12} marginLeft={theme.spacing(35)}>
          <Container maxWidth={'lg'}>
            <Toolbar />
            <DashBoard />
          </Container>
        </Grid>

      </Grid>   
    </>
  )
}

export default Panel