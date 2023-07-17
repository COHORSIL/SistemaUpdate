import { Button,Dialog,DialogContent,DialogTitle,DialogActions,Typography} from "../Utils/MaterialUIComponents";

export const DialogOpen = ({
  showDialog,
  setShowDialog,
  nametoken,
  setGuardar,
  setShowDialog2,
  titleboton,
}) => {
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const Eliminar = () => {
    localStorage.removeItem(`${nametoken}`);
  };

  return (
    <Dialog fullWidth open={showDialog} onClose={handleDialogClose}>
      <DialogTitle>Continuar con los datos guardados?</DialogTitle>
      <DialogContent>
        <Typography>Tienes Datos Agregados</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => {
            Eliminar();
            handleDialogClose();
            setGuardar([]);
            setShowDialog2(false);
          }}
        >
          {titleboton}
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#266D99", color: "white" }}
          onClick={() => handleDialogClose()}
        >
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
