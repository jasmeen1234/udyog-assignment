// PowerCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function PowerCard({ data }) {
  return (
    <Card sx={{ minWidth: 275, margin: 2,  padding:'30 px', display: 'flex', alignItems: 'center' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        {data.icon}
        <Typography variant="h5" component="div" sx={{ marginLeft: 2 }}>
             {data.device}
        </Typography>
        <Typography variant="body2" sx={{ marginLeft: 'auto' }}>
          {data.consumption} W
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PowerCard;
