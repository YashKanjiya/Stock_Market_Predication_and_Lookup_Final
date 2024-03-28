import { Typography, Button } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/NavigateBeforeTwoTone';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  Grid
} from '@material-ui/core/'
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '28px'
  },
  root2: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  gcontainer: {
    paddingLeft: "50px",
    paddingRight: "20px"
  }
}));


const About = () => {

  let history = useHistory();
  function handleClick(e) {
    e.preventDefault();
    history.push('/');
  }

  const classes = useStyles();
  //const preventDefault = (event) => event.preventDefault();

  return (

    <div className={classes.root2}>
      <Button variant="outlined" style={{ width: 120, marginBottom: 7 }} fontSize="medium" color="inherit" startIcon={<ArrowBack style={{ fontSize: 30 }} />} onClick={(e) => handleClick(e)} backgroundcolor="gray">Back</Button>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >

        <Grid item xs={12} sm={6} md={6} className={classes.gcontainer}>
          <Card className={classes.root} style={{ border: "none", boxShadow: "none" }}>

            <CardContent>
              <Typography gutterBottom variant="h4" component="h1" fontWeight="fontWeightBold">
                Kuldip Karangiya
              </Typography>
              <Typography variant="body1" component="p">
              Stock Trader And Investor
              </Typography>
            </CardContent>

            <CardActions>
              <a href='https://github.com/KuldipKarangiya' rel="noreferrer" target="_blank">
                <GitHubIcon fontSize="large" />
              </a>
              <a href='https://www.linkedin.com/in/kuldip-karangiya-2961631b6/' rel="noreferrer" target="_blank">
                <LinkedInIcon fontSize="large" />
              </a>
            </CardActions>

          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} className={classes.gcontainer}>
          <Card className={classes.root} style={{ border: "none", boxShadow: "none" }}>

            <CardContent>
              <Typography gutterBottom variant="h4" component="h1" fontWeight="fontWeightBold">
                Yash Kanjiya
              </Typography>
              <Typography variant="body1" component="p">
              Stock Trader And Investor
              </Typography>
            </CardContent>

            <CardActions>
              <a href='https://github.com/YashKanjiya/' rel="noreferrer" target="_blank">
                <GitHubIcon fontSize="large" />
              </a>
              <a href='https://www.linkedin.com/in/yash-kanjiya-4b03191b5/' rel="noreferrer" target="_blank">
                <LinkedInIcon fontSize="large" />
              </a>
            </CardActions>

          </Card>
        </Grid>
      </Grid>
    </div>

  );
};

export default About;