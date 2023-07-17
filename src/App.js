import { useState } from "react";
import Router from "./Router/Router";
import ContexUsuario from "./Context/ContextUsuario";
import { refreshGlobal } from "./Context/ContextRefresh";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./theme";
import { CssBaseline } from '@mui/material';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
  const [userInfo, setuserInfo] = useState([]);
  const [TokenDecode, setTokenDecode] = useState([]);
  const [refreshApi, setrefreshApi] = useState(false);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <refreshGlobal.Provider
        value={{
          refreshApi,
          setrefreshApi,
          userInfo,
          setuserInfo,
          setTokenDecode,
          TokenDecode,
        }}
      >
        <ContexUsuario.Provider value={userInfo}>
          <Router
            setuserInfo={setuserInfo}
            setTokenDecode={setTokenDecode}
            userInfo={userInfo}
          />
        </ContexUsuario.Provider>
      </refreshGlobal.Provider>
    </ThemeProvider>
  );
}

export default App;
