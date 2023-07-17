import React from 'react'
import './Header.scss'
import moment from 'moment'
import 'moment/locale/es'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ff from './imagen.png'

export default function Header() {
  return (
    <>
      <div className="container">
        <Grid container>
          <Grid item xs>
            <Typography>
              <div className="container__fecha">
                {moment().format('MMMM YYYY, h:mm:ss')}
              </div>
              <div>Calidad COHORSIL</div>
            </Typography>
          </Grid>
          <Grid item xs={6} className="TITULO">
            <p>TITULO</p>
          </Grid>
          <Grid item xs className="TITULO2">
            <p>TITULO</p>
          </Grid>
          <div className="container__logo">
            <img src={ff} alt="musifyt" />
          </div>
        </Grid>
      </div>
    </>
  )
}
