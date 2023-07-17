
import { Modal,makeStyles,Fade,Backdrop,Button} from "../../Utils/MaterialUIComponents";
import {ArrowForwardIcon,CancelIcon } from "../../Utils/MaterialUI-Icons";



import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none'
    }
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  cancelar: {
    // marginLeft: 25,
    marginRight: 20
  }
}))

export default function ModalCerrarSeion({
  openModalSesion,
  setOpenModalSesion
}) {
  const classes = useStyles()

  const handleClose = () => {
    setOpenModalSesion(false)
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModalSesion}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 50
        }}
      >
        <Fade in={openModalSesion}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Cerrar Sesion?</h2>
            <Botones setOpenModalSesion={setOpenModalSesion} />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

function Botones({ setOpenModalSesion }) {
  const classes = useStyles()
  const navigate = useNavigate()

  const Cerrar = () => {
    localStorage.clear()
    navigate('/Login')
  }

  return (
    <>
      <Button
        onClick={() => setOpenModalSesion(false)}
        variant="contained"
        color="secondary"
        startIcon={<CancelIcon />}
        className={classes.cancelar}
      >
        Cancelar
      </Button>

      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardIcon />}
        onClick={() => Cerrar()}
      >
        Cerrar Sesion
      </Button>
    </>
  )
}
