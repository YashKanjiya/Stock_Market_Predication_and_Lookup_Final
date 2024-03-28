import { Typography } from '@material-ui/core';
import useStyles from './styles';
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core/';
import Clock from '../Clock/Clock';

const Footer = () => {
  const classes = useStyles();

  const WhiteTextTypography = withStyles({
    root: {
      color: "#FF0000"
    }
  })(Typography);

  return (
    <div className={classes.root2}>
      <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">

        <Grid item xs={12} sm={6} md={6} className={classes.gcontainer}>
          <Card className={classes.root} style={{ border: "none", boxShadow: "none" }}>
            <CardContent>
              <WhiteTextTypography gutterBottom variant="h5" component="h1" fontWeight="fontWeightBold">
                
                  About
                
              </WhiteTextTypography>
              <hr />
              <WhiteTextTypography variant="body2" component="p" fontWeight="fontWeightMedium" align="justify">
                
                  StockWatch is Software that provides  live data of stocks and also past years data. It also contains Charts for better Visualization. It has fundamental data of all companies. You can make trigger for particular stock and when condition satisfies system mails you about that event...
                
              </WhiteTextTypography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} className={classes.gcontainer}>
          <Card className={classes.root} style={{ border: "none", boxShadow: "none" }}>
            <CardContent>
              <WhiteTextTypography gutterBottom variant="h5" component="h1" fontWeight="fontWeightBold">
                
                  Quick Links
                
              </WhiteTextTypography>
              <hr />
              <WhiteTextTypography variant="body2" component="p" fontWeight="fontWeightMedium">
                
                  <Link to={{ pathname: `/about` }} style={{ color: "#FF0000" }} >About Us</Link>
                
              </WhiteTextTypography>
              <Typography variant="body2" component="p" fontWeight="fontWeightMedium">
                
                  <Link to={{ pathname: `/contact` }} style={{ color: "#FF0000" }}>Contact Us</Link>
                
              </Typography>
              <Typography variant="body2" component="p" fontWeight="fontWeightMedium">
                
                  <Link to={{ pathname: `/ipo` }} style={{ color: "#FF0000" }}>IPO</Link>
                
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
      <hr />
      <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item xs={12} sm={6} md={6} className={classes.gcontainer}>
          <WhiteTextTypography>Copyright © 2022 All Rights Reserved by <strong>StockWatch</strong></WhiteTextTypography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.gcontainer}>
          <Clock white />
        </Grid>
      </Grid>
    </div >
  )
}

export default Footer;
