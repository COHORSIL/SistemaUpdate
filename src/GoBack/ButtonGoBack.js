import  { useState } from "react";
import "./ButtonGoBack.scss";
import { useNavigate } from "react-router-dom";
import { SpeedDial,makeStyles} from "../Utils/MaterialUIComponents";
import { ArrowBackIcon} from "../Utils/MaterialUI-Icons";

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  exampleWrapper: {
    position: "relative",
    marginTop: theme.spacing(3),
    height: 380,
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

export default function ButtonGoBack() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [hidden] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="ButtonGoBack">
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<ArrowBackIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="right"
          onClick={() => navigate(-1)}
        ></SpeedDial>
      </div>
    </div>
  );
}
