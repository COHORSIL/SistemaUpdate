
import { Routes, Route } from "react-router-dom";

//Component
import Login from "../Components/Login/Login";
import Precarga from "../Log/Precarga";
import Menu from "../Components/Menu/Menu";

export default function Router({ setuserInfo, setTokenDecode }) {
  return (
    <Routes>
      <Route path="/" element={<Precarga />} />
      <Route
        path="/Login"
        element={
          <Login setuserInfo={setuserInfo} setTokenDecode={setTokenDecode} />
        }
      />
      <Route path="*" element={<Menu />} />
    </Routes>
  );
}
