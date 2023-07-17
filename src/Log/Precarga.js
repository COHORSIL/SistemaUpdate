/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { size } from "lodash";

export default function Precarga() {
  const navigate = useNavigate();

  const PreLoad = async (Data) => {
    if (size(Data) > 0) {
      navigate("*");
      return;
    } else {
      navigate("/Login");
    }
  };

  useEffect(() => {
    const DataLocal = localStorage.getItem("Token");
    const Data = JSON.parse(DataLocal);

    PreLoad(Data);
  }, []);

  return <div></div>;
}
