import { useState, useEffect, useContext } from "react";
import { Dialog,DialogContent,DialogContentText,DialogTitle} from "../../../Utils/MaterialUIComponents";
import Select from "react-select";


import { refreshGlobal } from "../../../Context/ContextRefresh";
import {
  REGIONESTADISTICA,
  PROVSTADISTICA,
  LINEASTADISTICA,
} from "../../../Utils/Appis";

export default function DialogEstas({
  Dialogopen,
  setDialog,
  setSelectData,
  Apiurl,
  SelectData,
}) {
  const { TokenDecode } = useContext(refreshGlobal);

  const [DataSelect, setDataSelect] = useState([]);

  useEffect(() => {
    let url = "";
    if (Apiurl === "REGIONESTADISTICA") {
      url = REGIONESTADISTICA;
    }

    if (Apiurl === "PROVSTADISTICA") {
      url = PROVSTADISTICA;
    }

    if (Apiurl === "LINEASTADISTICA") {
      url = LINEASTADISTICA;
    }

    fetch(url, {
      method: "GET",
      headers: { Authorization: TokenDecode },
    })
      .then((res) => res.json())
      .then((activid) => {
        const newArray = activid.map((item) => ({
          value: item.Codigo,
          label: item.Nombre,
        }));
        setDataSelect(newArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [TokenDecode, Apiurl]);

  const onChageSelect = (label, value) => {
    let select = {
      label: label,
      value: value,
    };
    setSelectData(select);
    setDialog(false)
  };

  return (
    <div>
      <Dialog
        open={Dialogopen}
        onClose={() => setDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"       Seleccione para Filtrado     "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div style={{ height: 300, width: 350 }}>
              <Select
                value={SelectData}
                options={DataSelect}
                menuIsOpen={true}
                onChange={(data) => {
                  onChageSelect(data.label, data.value);
                }}
              />
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
