import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import './Backdrop.scss'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 5,
    color: '#fff'
  }
}))

export default function SimpleBackdrop({
  openBackDrop,
  setOpenBackDrop,
  text
}) {
  const classes = useStyles()

  return (
    <Backdrop
      className={classes.backdrop}
      open={openBackDrop}
      onClick={() => setOpenBackDrop(!openBackDrop)}
    >
      <CircularProgress color="inherit" />
      <h2>{text}</h2>
    </Backdrop>
  )
}
