
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import {featuredStyles} from "../../styles/productCard/productCard.styles"

const Productcard = () => {
    return (
      <Card sx={featuredStyles.card}>
        <CardMedia
          component="img"
          height="200"
          image={}
          alt={}
        />
        <CardContent>
          <Typography variant="h6" sx={featuredStyles.cardTitle}>
            {}
          </Typography>
          <Typography variant="body2" sx={featuredStyles.cardDescription}>
            {}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default Productcard;
