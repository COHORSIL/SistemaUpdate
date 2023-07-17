/* eslint-disable no-unused-vars */
import React from "react";
import {makeStyles,AppBar,Toolbar,Typography,IconButton,Switch,FormControlLabel,FormGroup,MenuItem,Menu,Badge} from "../../Utils/MaterialUIComponents";
import {MenuIcon,AccountCircle,HomeIcon,MailIcon} from "../../Utils/MaterialUI-Icons";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: "15%",
  },
  toolbar: {
    backgroundColor: "#fafafa",
    height: 30,
  },
}));

export default function APPbar({
  Titulo,
  setTitulo,
  setOpenModalSesion,
  toggleDark,
  settoggleDark,
}) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Trigger toggle using onChange Switch
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          // label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="fixed" style={{ marginTop: 12, height: 1 }}>
        <Toolbar style={toggleDark ? { backgroundColor: "#303030", height: 30 } : { backgroundColor: "#fafafa", height: 30 } }>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={toggleDark ? { color: "white" } : { color: "black" }}
          >
            {Titulo}
          </Typography>
          {auth && (
            <div>
              <Switch
                checked={toggleDark}
                onChange={handleModeChange}
                name="toggleDark"
                color="default"
              />
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                style={toggleDark ? { color: "white", marginRight: "10px", } : { color: "#282c34", marginRight: "10px", }}
           
              >
                <BandejaMensajes />
              </IconButton>

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {
                  navigate("/*");
                  setTitulo("Home");
                }}
                color="inherit"
                style={toggleDark ? { color: "white", marginRight: "10px", } : { color: "#282c34", marginRight: "10px", }}
              >
                <HomeIcon />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={toggleDark ? { color: "white", marginRight: "10px", } : { color: "#282c34", marginRight: "10px", }}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/PerfilUsuario");
                    handleClose();
                    setTitulo("Perfil de Usuario");
                  }}
                >
                  Perfil
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpenModalSesion(true);
                    handleClose();
                    setTitulo("Home");
                  }}
                >
                  Cerra Sesion
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

function BandejaMensajes() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
      "& .MuiBadge-root": {
        marginRight: theme.spacing(4),
      },
    },
  }));

  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div>
      <Badge color="secondary" badgeContent={count} overlap="rectangular">
        <MailIcon />
      </Badge>
    </div>
  );
}
