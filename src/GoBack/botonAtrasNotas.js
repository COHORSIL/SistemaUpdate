import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import ArrowBackOutlined from '@material-ui/icons/ArrowBackOutlined'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        transform: 'translateZ(0px)',
        flexGrow: 1,
      },
      exampleWrapper: {
        position: 'relative',
        marginTop: theme.spacing(0),
        height: 0,
      },
      radioGroup: {
        margin: theme.spacing(1, 0),
      },
      speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
          top: theme.spacing(2),
          left: theme.spacing(2),
        },
      },
}));


export default function BackBotonNotasPeso() {
  const classes = useStyles();

  const Navigate = useNavigate()

  return (
    <div className={classes.root}>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<ArrowBackOutlined />}
          onClick={() => {Navigate('/listadoNotas', {state: null , replace: true})}}
        >
        </SpeedDial>
      </div>
    </div>
  );
}
