import { Button,Dialog,DialogContent,DialogTitle,DialogActions,Typography} from "../Utils/MaterialUIComponents";


export const DialogOpenArqueo = ({
  showDialog,
  setShowDialog,
  guardar,
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
      <DialogTitle>Continuar Agregando Productos?</DialogTitle>
      <DialogContent>
        <Typography>Tienes Datos Agregados</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => {
            Eliminar();
            handleDialogClose();
            setGuardar({
              ...guardar,
              unlempira: "",
              doslempiras: "",
              cincolempiras: "",
              diezlempiras: "",
              veintelempiras: "",
              cincuentalempiras: "",
              cienlempiras: "",
              doscientoslempiras: "",
              quinientoslempiras: "",
              uncentavo: "",
              doscentavos: "",
              cincocentavos: "",
              diezcentavos: "",
              veintecentavos: "",
              cincuentacentavos: "",
            });
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
