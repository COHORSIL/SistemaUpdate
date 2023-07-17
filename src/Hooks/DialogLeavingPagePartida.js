import { Button,Dialog,DialogContent,Zoom,DialogTitle,DialogActions,Typography,IconButton,Tooltip} from "../Utils/MaterialUIComponents";
import {DeleteSweepIcon} from "../Utils/MaterialUI-Icons"




export const DialogLeavingPagePartida = ({
  showDialog,
  setShowDialog,
  cancelNavigation,
  confirmNavigation,
  hanldeLeave,
}) => {
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <Dialog fullWidth open={showDialog} onClose={handleDialogClose}>
      <div
        style={{
          position: "absolute",
          right: 15,
          top: 15,
        }}
      >
        <Tooltip
          title="Salir y eliminar Datos"
          placement="right-end"
          TransitionComponent={Zoom}
        >
          <IconButton
            aria-label="delete"
            onClick={() => {
              confirmNavigation();
            }}
          >
            <DeleteSweepIcon style={{ color: "red" }} />
          </IconButton>
        </Tooltip>
      </div>

      <DialogTitle>Abandonar?</DialogTitle>
      <DialogContent>
        <Typography>Tienes Datos Agregados</Typography>
        <Typography>¿Seguro que quieres abandonar?</Typography>
        {/* <Typography>Are you sure you want to proceed?</Typography> */}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={cancelNavigation}>
          Permanecer
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            confirmNavigation();
            hanldeLeave();
          }}
        >
          Abandonar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
