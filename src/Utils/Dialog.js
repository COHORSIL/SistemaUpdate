import React from 'react'
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Slide} from "../Utils/MaterialUIComponents";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function DialogAlert({
    setOpenAlert,
    openAlert,
    titulo,
    pregunta,
    funcion1,
    Funcion2,
  }) {
  
    const handleClose = () => {
      setOpenAlert(false);
    };
  
    const handeSave = async() => {
      funcion1()
      handleClose();
      
    };
  return (
    <div>
    <Dialog
      open={openAlert}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{titulo}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {pregunta}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          style={{ backgroundColor: "#ededed", color: "black" }}
          color="primary"
        >
          Cancelar
        </Button>
        <Button
          onClick={handeSave}
          style={{ backgroundColor: "#a2cf6e", color: "black" }}
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}