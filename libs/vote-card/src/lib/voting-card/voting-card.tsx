import styles from './voting-card.module.scss';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Drawer, IconButton, Tooltip } from '@mui/material';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

/* eslint-disable-next-line */
export interface VotingCardProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | '#D3D3D3';
  author?: string;
  img?: string;
}

export function VotingCard(props : VotingCardProps) {
  const { color,author,img } = props
const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Card
      sx={{ position: 'relative', minWidth: 275, marginBottom: '20px' }}
      style={{ backgroundColor: color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
        <Typography
          sx={{ mb: 1.5, display: 'flex', justifyContent: 'center' }}
          color="text.secondary"
        >
          <img
            src={img}
            alt={img}
            style={{ width: '150px', height: '150px' }}
          />
        </Typography>
        {isHovered && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end', // Align icons to the right
              position: 'absolute',
              top: '0px',
              bottom: '0px',
              right: 0, // Position the div on the right side
              width: '16%',
              height: '47%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '8px', // Add padding for spacing
              boxSizing: 'border-box',
              marginTop: 'auto',
              marginBottom: 'auto',
              borderRadius: '9px 0px 0px 9px',
            }}
          >
            {/* <Tooltip title="Like"> */}
            <IconButton onClick={() => alert(`Thank You for like for ${author}`)}>
              <ThumbUpAltRoundedIcon />
            </IconButton>
            <IconButton onClick={() => alert(`Thank You for Comment`)}>
              <CommentRoundedIcon />
            </IconButton>
            {/* </Tooltip> */}
            {/* <Tooltip title="Comment"> */}
            <IconButton onClick={() => alert(`Thank You for Send`)}><SendRoundedIcon /></IconButton>
            {/* </Tooltip> */}
          </div>
        )}
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => alert(`Thank You for Voting for ${author}`)}>
          VOTE
        </Button>
      </CardActions>
    </Card>
  );
}

export default VotingCard;


