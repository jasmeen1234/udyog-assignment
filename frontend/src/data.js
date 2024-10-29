import { AcUnit, Lightbulb, AcUnit as RefrigeratorIcon, Fireplace, Toys } from '@mui/icons-material';

export const powerData = [
  { device: 'Fans', consumption: 270, icon: <Toys /> },                 
  { device: 'Lights', consumption: 876, icon: <Lightbulb /> },          
  { device: 'Refrigerator', consumption: 0, icon: <RefrigeratorIcon /> },
  { device: 'Air Conditioner', consumption: 65, icon: <AcUnit /> },      
  { device: 'Heater', consumption: 2095, icon: <Fireplace /> },          
];
