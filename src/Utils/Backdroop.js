
import { CircularProgress,makeStyles,Backdrop} from "../Utils/MaterialUIComponents";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Backdroop({Drop, setDrop}) {
  const classes = useStyles();



  return (
    <div>
      <Backdrop className={classes.backdrop} open={Drop} onClick={() => setDrop(false)}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}