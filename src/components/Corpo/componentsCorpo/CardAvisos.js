import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CardNews() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Café da manhã
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Horário de café de manhã foi ajustado de acordo com a nova equipe. Agora será de 7:00 às 8:00.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          saber mais
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardNews;