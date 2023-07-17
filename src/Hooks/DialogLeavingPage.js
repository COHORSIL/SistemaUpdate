
import { Button,Dialog,DialogContent,Zoom,DialogTitle,DialogActions,Typography,IconButton,Tooltip} from "../Utils/MaterialUIComponents";
import {DeleteSweepIcon} from "../Utils/MaterialUI-Icons"

export const DialogLeavingPage = ({
  showDialog,
  setShowDialog,
  cancelNavigation,
  confirmNavigation,
  guardar,
  nametoken,
}) => {
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const Guardar = () => {
    localStorage.setItem(`${nametoken}`, JSON.stringify(guardar));
    console.log("se Guardaron los datos");
  };

  const Eliminar = () => {
    localStorage.removeItem(`${nametoken}`);
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
              Eliminar();
            }}
          >
            <DeleteSweepIcon style={{ color: "red" }} />
          </IconButton>
        </Tooltip>
      </div>

      <DialogTitle>Abandonar?</DialogTitle>
      <DialogContent>
        <Typography>Tienes Datos Agregados</Typography>
        <Typography>
          Se almacenaran los datos y sé restableceran cuando vuelvas a entrar
        </Typography>
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
            Guardar();
          }}
        >
          Abandonar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
