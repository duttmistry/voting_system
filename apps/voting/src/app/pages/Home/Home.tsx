import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { VotingCard } from '@voting-system/vote-card';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
    return (
      <Container
        style={{ width: '100%', backgroundImage: "url('vote-background.jpg')" }}
      >
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Hello 
        </Typography>
        <Stack>
          <Button onClick={() => navigate('/voters')}>Voters</Button>
        </Stack>
      </Container>
    );
}