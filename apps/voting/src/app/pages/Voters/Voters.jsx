import { Button, Container, Grid, Stack } from '@mui/material';
import { VotingCard } from '@voting-system/vote-card';
import { useNavigate } from 'react-router-dom';

export default function Voters() {
  const navigate = useNavigate();
    return (
      <Container style={{ width: '100%' }}>
        <Stack>
          <Button onClick={() => navigate('/')}>Back To Home</Button>
        </Stack>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <VotingCard color={'white'} author={'MODI'} img={'indialogo.png'} />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <VotingCard
              color={'white'}
              author={'AMIT SHAH'}
              img={'indialogo.png'}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <VotingCard
              color={'white'}
              author={'KEJARIVAL'}
              img={'indialogo.png'}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <VotingCard
              color={'white'}
              author={'MUKESH KUMAR'}
              img={'indialogo.png'}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <VotingCard
              color={'white'}
              author={'KUMAR'}
              img={'indialogo.png'}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <VotingCard
              color={'white'}
              author={'RAJIV GANDHI'}
              img={'indialogo.png'}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <VotingCard
              color={'white'}
              author={'RAHUL GANDHI'}
              img={'indialogo.png'}
            />
          </Grid>
        </Grid>
      </Container>
    );
}
