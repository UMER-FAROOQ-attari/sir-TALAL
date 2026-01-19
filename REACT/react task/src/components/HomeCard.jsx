import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function HomeCard(props) {
  return (
    <Card className='m-5'  sx={{ maxWidth: 345 }}>
   <CardMedia
    component="img"
    className="p-5 w-full h-40 object-cover inset-shadow-sm inset-shadow-indigo-500 ."
    image={props.img}
    alt={props.title}
  />
      <CardContent className='bg-blue-300'>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       {props.text}
        </Typography>
      </CardContent>
      <CardActions className='bg-blue-200'>
        <Button size="small"> <Link to={props.link}>See</Link>  </Button>
      </CardActions>
    </Card>
  );
}
