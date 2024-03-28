import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

//import MoreVertIcon from '@material-ui/icons/MoreVert';
//import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
//import { useTheme } from '@material-ui/core/styles';

import * as api from '../../api/index.js';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
  button: {
    marginRight: 3,
    align: `right`,
  },
  avatar: {
    backgroundColor: 'red',
  },
});



export default function Datatable({ data }) {
  //const columns = data[0] && Object.keys(data[0]);
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  async function handleClick(symbol, e) {
    e.preventDefault();
    try {
      const { data } = await api.updateWatchlist({ symbol });
      //console.log(data);
      //getList();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <table cellPadding={0} cellSpacing={0}>
    //   <thead>
    //     <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
    //   </thead>
    //   <tbody>
    //     {data.map(row => <tr>
    //       {
    //         columns.map(column => <td>{row[column]}</td>)

    //       }
    //     </tr>)

    //     }
    //     <Toolbar>
    //             Hi
    //         </Toolbar>
    //   </tbody>
    // </table>
    data.map(row =>
      <Box mb={1}>
        <Card className={classes.root} variant="outlined">
          <CardHeader
            avatar={
              <Typography>
                {row.symbol}
              </Typography>
            }
            action={
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={(e) => handleClick(row.symbol, e)}
              >
                Delete
      </Button>
            }
          />
          <CardContent>
            <Typography variant="h6" component="h6">
              {row.name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    )

  )
}
